/**
 * AI layer — the Inference Router.
 *
 * Jelas routes every request through Firebase AI Logic:
 *
 *  - `runHybrid(prompt)` — a model created with
 *    `InferenceMode.PREFER_ON_DEVICE`. Firebase AI Logic serves the request
 *    with Gemini Nano on the device when Chrome supports it (private,
 *    instant, offline-capable) and transparently falls back to the cloud
 *    Gemini model when it does not. Used for fast, sensitive work:
 *    plain-language simplification.
 *
 *  - `runCloud(prompt)` — a regular cloud Gemini model. Used for heavier
 *    reasoning: deep explanations, follow-up Q&A and action checklists.
 *
 * The user's routing mode (Auto / Device only / Cloud) is honoured by both
 * entry points. Every completed request reports its route and latency to a
 * listener so the UI can render the Inference Router panel.
 *
 * When Firebase is not configured (placeholder config), both entry points
 * reject with `AiUnavailableError` and the UI explains why — nothing here
 * throws at import time.
 */
import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend,
  InferenceMode,
  type ChatSession,
  type GenerativeModel,
} from "firebase/ai";
import { services } from "./firebase";

export type RoutingMode = "auto" | "device" | "cloud";
export type Route = "device" | "cloud";

export interface RunResult {
  text: string;
  route: Route;
  latencyMs: number;
  modelLabel: string;
}

export interface SimplifyResult extends RunResult {
  plain: string;
  bullets: string[];
}

export type OnDeviceStatus =
  | "available"
  | "downloadable"
  | "downloading"
  | "unavailable"
  | "unsupported"
  | "unknown";

export class AiUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AiUnavailableError";
  }
}

/* ------------------------------------------------------------------ */
/* Router state                                                        */
/* ------------------------------------------------------------------ */

let routingMode: RoutingMode = "auto";
let cloudEnabled = true;
let routeListener: ((r: RunResult & { task: string }) => void) | null = null;

export function setRoutingMode(mode: RoutingMode): void {
  routingMode = mode;
}

export function getRoutingMode(): RoutingMode {
  return routingMode;
}

export function setCloudEnabled(enabled: boolean): void {
  cloudEnabled = enabled;
}

export function onRoute(fn: (r: RunResult & { task: string }) => void): void {
  routeListener = fn;
}

/* ------------------------------------------------------------------ */
/* Model handles (lazy, created once Firebase is known to exist)       */
/* ------------------------------------------------------------------ */

const CLOUD_MODEL = "gemini-2.5-flash";

let hybridModel: GenerativeModel | null = null;
let deviceModel: GenerativeModel | null = null;
let cloudModel: GenerativeModel | null = null;

function models(): {
  hybrid: GenerativeModel;
  device: GenerativeModel;
  cloud: GenerativeModel;
} {
  if (!services) {
    throw new AiUnavailableError(
      "Firebase is not configured yet. Add your project config in " +
        "src/firebase-config.ts to enable live AI.",
    );
  }
  if (!hybridModel || !deviceModel || !cloudModel) {
    const ai = getAI(services.app, { backend: new GoogleAIBackend() });
    hybridModel = getGenerativeModel(ai, {
      mode: InferenceMode.PREFER_ON_DEVICE,
    });
    deviceModel = getGenerativeModel(ai, {
      mode: InferenceMode.ONLY_ON_DEVICE,
    });
    cloudModel = getGenerativeModel(ai, { model: CLOUD_MODEL });
  }
  return { hybrid: hybridModel, device: deviceModel, cloud: cloudModel };
}

/* ------------------------------------------------------------------ */
/* On-device availability probe (Chrome Prompt API status)             */
/* ------------------------------------------------------------------ */

interface LanguageModelLike {
  availability?: () => Promise<string>;
  capabilities?: () => Promise<{ available?: string }>;
}

export async function probeOnDevice(): Promise<OnDeviceStatus> {
  try {
    const w = window as unknown as {
      LanguageModel?: LanguageModelLike;
      ai?: { languageModel?: LanguageModelLike };
    };
    const lm = w.LanguageModel ?? w.ai?.languageModel;
    if (!lm) return "unsupported";

    if (typeof lm.availability === "function") {
      switch (await lm.availability()) {
        case "available":
          return "available";
        case "downloadable":
          return "downloadable";
        case "downloading":
          return "downloading";
        case "unavailable":
          return "unavailable";
        default:
          return "unknown";
      }
    }
    if (typeof lm.capabilities === "function") {
      const caps = await lm.capabilities();
      if (caps.available === "readily") return "available";
      if (caps.available === "after-download") return "downloadable";
      if (caps.available === "no") return "unavailable";
    }
    return "unknown";
  } catch {
    return "unknown";
  }
}

/* ------------------------------------------------------------------ */
/* Core runners                                                        */
/* ------------------------------------------------------------------ */

async function generate(
  model: GenerativeModel,
  prompt: string,
  route: Route,
  modelLabel: string,
  task: string,
): Promise<RunResult> {
  const started = performance.now();
  const response = await model.generateContent(prompt);
  const result: RunResult = {
    text: response.response.text().trim(),
    route,
    latencyMs: Math.round(performance.now() - started),
    modelLabel,
  };
  routeListener?.({ ...result, task });
  return result;
}

/**
 * Hybrid inference: on-device preferred (Gemini Nano), cloud fallback.
 * Honours the routing mode: "device" forces on-device only, "cloud"
 * delegates to the cloud model.
 */
export async function runHybrid(
  prompt: string,
  task = "Hybrid request",
): Promise<RunResult> {
  const { hybrid, device } = models();

  if (routingMode === "cloud") return runCloud(prompt, task);

  if (routingMode === "device") {
    return generate(device, prompt, "device", "Gemini Nano (on-device)", task);
  }

  // Auto: PREFER_ON_DEVICE. Firebase AI Logic serves on-device when Gemini
  // Nano is ready and falls back to the cloud otherwise; the probe tells us
  // which of the two will serve, so the badge reflects the real route.
  const onDevice = await probeOnDevice();
  const route: Route = onDevice === "available" ? "device" : "cloud";
  return generate(
    hybrid,
    prompt,
    route,
    route === "device"
      ? "Gemini Nano (on-device)"
      : `${CLOUD_MODEL} (cloud fallback)`,
    task,
  );
}

/** Cloud inference via Firebase AI Logic (Gemini Developer API backend). */
export async function runCloud(
  prompt: string,
  task = "Cloud request",
): Promise<RunResult> {
  if (!cloudEnabled) {
    throw new AiUnavailableError(
      "Cloud features are currently disabled by Remote Config.",
    );
  }
  const { cloud } = models();
  return generate(cloud, prompt, "cloud", CLOUD_MODEL, task);
}

/* ------------------------------------------------------------------ */
/* Product-level tasks                                                 */
/* ------------------------------------------------------------------ */

const SAFETY_NOTE =
  "Write for a reader with low literacy: short sentences, everyday words, " +
  "no jargon. Keep every fact, name, date and amount from the original. " +
  "Never invent information that is not in the document.";

export async function simplifyDocument(
  documentText: string,
): Promise<SimplifyResult> {
  const prompt =
    `Rewrite the document below in plain, simple language.\n${SAFETY_NOTE}\n\n` +
    `Respond in exactly this format:\n` +
    `PLAIN:\n<the plain-language rewrite>\n\n` +
    `KEY POINTS:\n- <point 1>\n- <point 2>\n- <point 3>\n\n` +
    `DOCUMENT:\n"""\n${documentText}\n"""`;

  const result = await runHybrid(prompt, "Simplify");
  const plainMatch = result.text.match(
    /PLAIN:\s*([\s\S]*?)(?:\n\s*KEY POINTS:|$)/i,
  );
  const bulletsMatch = result.text.match(/KEY POINTS:\s*([\s\S]*)$/i);
  const bullets = bulletsMatch
    ? bulletsMatch[1]
        .split("\n")
        .map((line) => line.replace(/^[\s\-*•]+/, "").trim())
        .filter(Boolean)
        .slice(0, 5)
    : [];

  return {
    ...result,
    plain: (plainMatch?.[1] ?? result.text).trim(),
    bullets,
  };
}

export async function explainDocument(documentText: string): Promise<RunResult> {
  const prompt =
    `Explain the document below in depth for a non-expert reader.\n` +
    `${SAFETY_NOTE}\n` +
    `Cover: what this document is, why the reader received it, what it asks ` +
    `of them, any deadlines, costs or risks, and what could happen if they ` +
    `ignore it. Use clear headings and short paragraphs.\n\n` +
    `DOCUMENT:\n"""\n${documentText}\n"""`;
  return runCloud(prompt, "Explain deeply");
}

export async function extractChecklist(documentText: string): Promise<RunResult> {
  const prompt =
    `From the document below, extract an action checklist for the reader.\n` +
    `${SAFETY_NOTE}\n` +
    `Respond with a Markdown checklist only, one item per line, in this ` +
    `form: "- [ ] <action> (by <date>, <amount if any>)". Include every ` +
    `concrete step, deadline, payment and document the reader must act on. ` +
    `If the document asks for nothing, reply with exactly: ` +
    `"- [ ] No action needed — this document is for information only."\n\n` +
    `DOCUMENT:\n"""\n${documentText}\n"""`;
  return runCloud(prompt, "Action checklist");
}

/* ------------------------------------------------------------------ */
/* Follow-up Q&A chat (cloud, grounded in the current document)        */
/* ------------------------------------------------------------------ */

let chatSession: ChatSession | null = null;
let chatDocument = "";

export function resetDocumentChat(documentText: string): void {
  chatSession = null;
  chatDocument = documentText;
}

export async function askAboutDocument(question: string): Promise<RunResult> {
  if (!cloudEnabled) {
    throw new AiUnavailableError(
      "Cloud features are currently disabled by Remote Config.",
    );
  }
  const { cloud } = models();
  if (!chatSession) {
    chatSession = cloud.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text:
                `You are Jelas, a patient reading companion. The user will ` +
                `ask questions about this document. Answer only from the ` +
                `document, in simple language. If the answer is not in the ` +
                `document, say so honestly.\n\nDOCUMENT:\n"""\n${chatDocument}\n"""`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I will answer questions about this document in simple language.",
            },
          ],
        },
      ],
    });
  }
  const started = performance.now();
  const response = await chatSession.sendMessage(question);
  const result: RunResult = {
    text: response.response.text().trim(),
    route: "cloud",
    latencyMs: Math.round(performance.now() - started),
    modelLabel: CLOUD_MODEL,
  };
  routeListener?.({ ...result, task: "Q&A" });
  return result;
}
