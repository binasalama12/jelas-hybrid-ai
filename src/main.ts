/**
 * Jelas — UI wiring.
 *
 * Plain TypeScript + DOM. All AI calls go through src/ai.ts (the Inference
 * Router); all persistence goes through src/library.ts. This file only
 * renders state and forwards user intent, so the app shell keeps working —
 * with clear status messages — even when Firebase is unconfigured or the
 * on-device model is unavailable.
 */
import "./style.css";
import {
  AiUnavailableError,
  askAboutDocument,
  explainDocument,
  extractChecklist,
  onRoute,
  probeOnDevice,
  resetDocumentChat,
  setCloudEnabled,
  setRoutingMode,
  simplifyDocument,
  type OnDeviceStatus,
  type RoutingMode,
  type RunResult,
} from "./ai";
import { isConfigured } from "./firebase-config";
import { loadRemoteSettings, remoteDefaults } from "./firebase";
import { deleteDocument, listDocuments, saveDocument } from "./library";
import { samples } from "./samples";

/* ------------------------------------------------------------------ */
/* DOM handles                                                         */
/* ------------------------------------------------------------------ */

function el<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing element #${id}`);
  return node as T;
}

const input = el<HTMLTextAreaElement>("doc-input");
const charCount = el("char-count");
const statusLine = el("action-status");
const resultsEl = el("results");
const deviceStatusEl = el("device-status");
const cloudStatusEl = el("cloud-status");
const requestCountEl = el("request-count");
const lastRouteEl = el("last-route");
const routeLogEl = el("route-log");
const routerDot = el("router-dot");
const chatLog = el("chat-log");
const chatForm = el<HTMLFormElement>("chat-form");
const chatInput = el<HTMLInputElement>("chat-input");
const libraryList = el("library-list");
const libraryStatus = el("library-status");

const buttons = {
  simplify: el<HTMLButtonElement>("btn-simplify"),
  explain: el<HTMLButtonElement>("btn-explain"),
  checklist: el<HTMLButtonElement>("btn-checklist"),
  save: el<HTMLButtonElement>("btn-save"),
};

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

let maxInputChars = remoteDefaults.maxInputChars;
let lastSimplification = "";
let requestCount = 0;

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setStatus(message: string, isError = false): void {
  statusLine.textContent = message;
  statusLine.classList.toggle("error", isError);
}

function setBusy(busy: boolean): void {
  for (const btn of Object.values(buttons)) btn.disabled = busy;
}

function currentDocument(): string {
  return input.value.trim();
}

function requireDocument(): string | null {
  const text = currentDocument();
  if (!text) {
    setStatus("Paste a document first — or pick one of the samples above.", true);
    input.focus();
    return null;
  }
  if (text.length > maxInputChars) {
    setStatus(
      `That document is ${text.length} characters; the current limit is ${maxInputChars}. Please shorten it.`,
      true,
    );
    return null;
  }
  return text;
}

function describeError(err: unknown): string {
  if (err instanceof AiUnavailableError) return err.message;
  if (err instanceof Error) {
    return `Something went wrong: ${err.message}`;
  }
  return "Something went wrong. Please try again.";
}

/* ------------------------------------------------------------------ */
/* Inference Router panel                                              */
/* ------------------------------------------------------------------ */

const deviceStatusText: Record<OnDeviceStatus, string> = {
  available: "Gemini Nano — ready on this device",
  downloadable: "Gemini Nano — downloadable",
  downloading: "Gemini Nano — downloading…",
  unavailable: "Gemini Nano — not available here",
  unsupported: "Not supported in this browser (use Chrome)",
  unknown: "Status unknown",
};

async function refreshDeviceStatus(): Promise<void> {
  const status = await probeOnDevice();
  deviceStatusEl.textContent = deviceStatusText[status];
}

function routeBadge(result: RunResult): string {
  const label = result.route === "device" ? "Device" : "Cloud";
  return (
    `<span class="result-meta">` +
    `<span class="route-tag route-${result.route}">${label} · ${escapeHtml(result.modelLabel)}</span>` +
    `<span class="latency">${result.latencyMs} ms</span></span>`
  );
}

onRoute((entry) => {
  requestCount += 1;
  requestCountEl.textContent = String(requestCount);
  lastRouteEl.textContent =
    entry.route === "device" ? "On-device" : "Cloud";
  const li = document.createElement("li");
  li.innerHTML =
    `<span class="route-tag route-${entry.route}">` +
    `${entry.route === "device" ? "Device" : "Cloud"}</span>` +
    `<span class="task">${escapeHtml(entry.task)}</span>` +
    `<span class="latency">${entry.latencyMs} ms</span>`;
  routeLogEl.prepend(li);
  while (routeLogEl.children.length > 6) routeLogEl.lastChild?.remove();
});

document
  .querySelectorAll<HTMLInputElement>('input[name="mode"]')
  .forEach((radio) => {
    radio.addEventListener("change", () => {
      setRoutingMode(radio.value as RoutingMode);
      setStatus(
        radio.value === "device"
          ? "Device-only mode: requests will not leave this device. Deep features still need the cloud."
          : radio.value === "cloud"
            ? "Cloud mode: every request uses the cloud model."
            : "Auto mode: quick tasks prefer your device, deep tasks use the cloud.",
      );
    });
  });

/* ------------------------------------------------------------------ */
/* Results                                                             */
/* ------------------------------------------------------------------ */

function renderResult(
  title: string,
  result: RunResult,
  bodyHtml: string,
): void {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML =
    `<div class="card-head"><h2>${escapeHtml(title)}</h2>${routeBadge(result)}</div>` +
    `<div class="result-body">${bodyHtml}</div>`;
  resultsEl.prepend(card);
}

function textBody(text: string): string {
  return escapeHtml(text);
}

async function runAction<T extends RunResult>(
  busyLabel: string,
  fn: (doc: string) => Promise<T>,
  render: (result: T) => void,
): Promise<void> {
  const doc = requireDocument();
  if (!doc) return;
  setBusy(true);
  setStatus(busyLabel);
  try {
    const result = await fn(doc);
    render(result);
    setStatus("Done.");
  } catch (err) {
    setStatus(describeError(err), true);
  } finally {
    setBusy(false);
  }
}

buttons.simplify.addEventListener("click", () => {
  void runAction(
    "Simplifying — preferring your device…",
    (doc) => simplifyDocument(doc),
    (result) => {
      lastSimplification = result.plain;
      const bullets = result.bullets.length
        ? `<h3>Key points</h3><ul>${result.bullets
            .map((b) => `<li>${escapeHtml(b)}</li>`)
            .join("")}</ul>`
        : "";
      renderResult(
        "In plain words",
        result,
        `${textBody(result.plain)}${bullets}`,
      );
      resetDocumentChat(currentDocument());
    },
  );
});

buttons.explain.addEventListener("click", () => {
  void runAction(
    "Asking the cloud model for a deep explanation…",
    (doc) => explainDocument(doc),
    (result) => renderResult("Deep explanation", result, textBody(result.text)),
  );
});

buttons.checklist.addEventListener("click", () => {
  void runAction(
    "Extracting your action checklist…",
    (doc) => extractChecklist(doc),
    (result) => {
      const items = result.text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const clean = line.replace(/^-\s*\[\s?x?\]\s*/i, "").replace(/^-\s*/, "");
          return `<li><label><input type="checkbox" /> ${escapeHtml(clean)}</label></li>`;
        })
        .join("");
      renderResult(
        "Action checklist",
        result,
        items ? `<ul style="list-style:none;padding-left:0">${items}</ul>` : textBody(result.text),
      );
    },
  );
});

/* ------------------------------------------------------------------ */
/* Chat                                                                */
/* ------------------------------------------------------------------ */

function appendChat(role: "user" | "assistant", text: string): void {
  chatLog.querySelector(".chat-empty")?.remove();
  const div = document.createElement("div");
  div.className = `chat-msg ${role}`;
  div.textContent = text;
  chatLog.appendChild(div);
  div.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  const doc = requireDocument();
  if (!doc) return;
  appendChat("user", question);
  chatInput.value = "";
  void (async () => {
    try {
      const answer = await askAboutDocument(question);
      appendChat("assistant", answer.text);
    } catch (err) {
      appendChat("assistant", describeError(err));
    }
  })();
});

input.addEventListener("input", () => {
  charCount.textContent = `${input.value.length} characters`;
  resetDocumentChat(currentDocument());
});

/* ------------------------------------------------------------------ */
/* Samples                                                             */
/* ------------------------------------------------------------------ */

document
  .querySelectorAll<HTMLButtonElement>("[data-sample]")
  .forEach((chip) => {
    chip.addEventListener("click", () => {
      const sample = samples.find((s) => s.id === chip.dataset.sample);
      if (!sample) return;
      input.value = sample.text;
      input.dispatchEvent(new Event("input"));
      setStatus(`Loaded the “${sample.title}” sample. Hit Simplify to try it.`);
      input.focus();
    });
  });

/* ------------------------------------------------------------------ */
/* Library                                                             */
/* ------------------------------------------------------------------ */

async function refreshLibrary(): Promise<void> {
  if (!isConfigured) {
    libraryStatus.textContent = "unavailable in demo mode";
    return;
  }
  try {
    const docs = await listDocuments();
    libraryStatus.textContent = docs.length
      ? `${docs.length} saved`
      : "nothing saved yet";
    libraryList.innerHTML = "";
    for (const saved of docs) {
      const li = document.createElement("li");
      li.className = "library-item";
      const when = saved.createdAt
        ? saved.createdAt.toLocaleString()
        : "just now";
      li.innerHTML =
        `<span class="title">${escapeHtml(saved.title)}</span>` +
        `<span class="meta">${escapeHtml(when)}</span>` +
        `<div class="row">` +
        `<button type="button" data-act="load">Load</button>` +
        `<button type="button" data-act="del" class="danger">Delete</button>` +
        `</div>`;
      li.querySelector('[data-act="load"]')?.addEventListener("click", () => {
        input.value = saved.original;
        input.dispatchEvent(new Event("input"));
        lastSimplification = saved.simplified;
        resultsEl.innerHTML = "";
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML =
          `<div class="card-head"><h2>In plain words</h2></div>` +
          `<div class="result-body">${textBody(saved.simplified)}</div>`;
        resultsEl.appendChild(card);
        setStatus(`Loaded “${saved.title}” from your Library.`);
      });
      li.querySelector('[data-act="del"]')?.addEventListener("click", () => {
        void (async () => {
          await deleteDocument(saved.id);
          await refreshLibrary();
        })();
      });
      libraryList.appendChild(li);
    }
  } catch (err) {
    libraryStatus.textContent = "could not load";
    console.warn("[jelas] Library load failed:", err);
  }
}

buttons.save.addEventListener("click", () => {
  void (async () => {
    const doc = requireDocument();
    if (!doc) return;
    if (!isConfigured) {
      setStatus(
        "The Library needs Firebase — add your config in src/firebase-config.ts first.",
        true,
      );
      return;
    }
    if (!lastSimplification) {
      setStatus("Simplify the document first, then save it to your Library.", true);
      return;
    }
    setBusy(true);
    try {
      const title = doc.split("\n")[0].slice(0, 60) || "Untitled document";
      const ok = await saveDocument(title, doc, lastSimplification);
      setStatus(ok ? "Saved to your Library." : "Could not save — sign-in failed.", !ok);
      if (ok) await refreshLibrary();
    } catch (err) {
      setStatus(describeError(err), true);
    } finally {
      setBusy(false);
    }
  })();
});

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

async function boot(): Promise<void> {
  if (!isConfigured) {
    el("config-banner").hidden = false;
    cloudStatusEl.textContent = "Not configured (demo mode)";
    routerDot.classList.remove("on");
  } else {
    cloudStatusEl.textContent = "Firebase AI Logic — connected";
    routerDot.classList.add("on");
  }

  await refreshDeviceStatus();

  const settings = await loadRemoteSettings();
  maxInputChars = settings.maxInputChars;
  setCloudEnabled(settings.cloudEnabled);
  input.maxLength = maxInputChars;
  if (!settings.cloudEnabled && isConfigured) {
    cloudStatusEl.textContent = "Disabled by Remote Config";
  }

  await refreshLibrary();
}

void boot();
