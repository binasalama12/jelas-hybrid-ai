# Jelas — Clear Reading Companion

**Hard documents, in plain words.**

Jelas helps people understand the documents that matter most — medicine
labels, school letters, bank notices, government forms — by rewriting them in
plain, simple language. It is built for elderly readers, low-literacy readers,
caregivers, and anyone who has ever stared at a paragraph of formal language
and thought: *what is this actually asking me to do?*

These are also exactly the documents people least want to upload to a stranger's
server. So Jelas runs its everyday work **on the device** whenever possible,
and only sends text to the cloud when a task genuinely needs a bigger model.

## What it does

- **Simplify** — paste any hard text and get a plain-language rewrite plus a
  three-point summary. Routed through **hybrid inference**: Gemini Nano
  on-device when available, cloud fallback otherwise.
- **Explain deeply** — a fuller explanation: what the document is, why you
  received it, deadlines, costs, risks, and what happens if you ignore it.
- **Action checklist** — every concrete step, date and amount extracted as a
  tick-off checklist.
- **Ask about this document** — follow-up Q&A chat grounded in the document.
- **Inference Router panel** — the signature feature. Every request shows
  where it ran (**Device** or **Cloud** badge), which model served it, and how
  long it took. You can override routing at any time: **Auto**,
  **Device only**, or **Cloud**.
- **Library** — save a document together with its simplification to
  Firestore, under an anonymous account. No sign-up form, ever.
- **Samples built in** — a medicine label, a school letter and a bank notice
  are one click away, so anyone can try Jelas in ten seconds.

## How Firebase AI Logic is used

Jelas is built entirely on **Firebase AI Logic** (Gemini Developer API
backend):

| Task | Route | How |
| --- | --- | --- |
| Simplify | Hybrid, on-device preferred | `getGenerativeModel(ai, { mode: InferenceMode.PREFER_ON_DEVICE })` — Gemini Nano serves the request on-device in Chrome when available; Firebase AI Logic falls back to the cloud model transparently when it is not. |
| Device-only mode | On-device only | Same API with `InferenceMode.ONLY_ON_DEVICE`. |
| Explain deeply / Checklist / Q&A | Cloud | `getGenerativeModel(ai, { model: "gemini-2.5-flash" })`; Q&A uses a `ChatSession` primed with the document. |

The routing logic lives in one small abstraction, `src/ai.ts`:

- `runHybrid(prompt)` and `runCloud(prompt)` return `{ text, route, latencyMs, modelLabel }`.
- A route listener feeds the Inference Router panel, so the UI always shows
  where each request actually ran.
- The on-device status shown in the panel comes from Chrome's Prompt API
  availability probe, which mirrors what hybrid inference will do.

Other Firebase products used:

- **App Check** (required) — reCAPTCHA v3 provider in production, debug-token
  support in development builds.
- **Firestore** — the Library, stored per anonymous user at
  `users/{uid}/documents`.
- **Anonymous Auth** — a stable uid with zero friction.
- **Remote Config** — `cloudEnabled` (kill-switch for cloud features) and
  `maxInputChars` (input limit), with safe defaults baked into the app.

## Architecture

```
index.html          Page shell: hero, input, results, chat, router panel, library
src/
  main.ts           UI wiring and rendering (vanilla TypeScript + DOM)
  ai.ts             Inference Router: hybrid/cloud runners, prompts, Q&A chat
  firebase.ts       Firebase init (App, App Check, Auth, Firestore, Remote Config)
  firebase-config.ts  ← the ONLY file you edit to connect your own project
  library.ts        Firestore persistence for saved documents
  samples.ts        Built-in sample documents
  style.css         Design system (no framework)
```

Graceful degradation is a design rule: with a placeholder config, or in a
browser without on-device AI, the app still loads, explains its status, and
never crashes.

## Getting started

Prerequisites: Node.js 20+, a Firebase project on the Spark (free) plan.

1. **Create / open a Firebase project** and enable:
   - **AI Logic** with the Gemini Developer API provider,
   - **Firestore Database**,
   - **Authentication → Anonymous** sign-in,
   - **App Check** for your web app (reCAPTCHA v3), and
   - **Remote Config** (optional — defaults work without it).
2. **Add a Web app** in Project settings and copy its config.
3. **Paste the config** into `src/firebase-config.ts`, replacing every
   `REPLACE_ME`, including the App Check site key.
4. **Lock down Firestore** with rules that keep each user's library private:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{uid}/documents/{docId} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```

5. **Run it:**

   ```bash
   npm install
   npm run dev      # local development (App Check debug token supported)
   npm run build    # production build into dist/
   ```

6. **Deploy** (optional): host the contents of `dist/` anywhere static —
   Firebase Hosting works well:

   ```bash
   npm run build
   npx firebase-tools deploy --only hosting
   ```

On-device inference requires Chrome with Gemini Nano available; on other
browsers the router panel says so and hybrid requests use the cloud fallback.

## Screenshots

<!-- TODO: add screenshots before submission -->
<!-- ![Jelas home](docs/screenshots/home.png) -->
<!-- ![Inference Router panel](docs/screenshots/router.png) -->

_Screenshots coming soon._

## A note on trust

Jelas is an aid to understanding, not a substitute for the original document
or for professional medical, legal or financial advice. Simplifications keep
every name, date and amount from the source text and never invent facts — but
always follow the original document where it matters.

## License

Apache License 2.0 — see [LICENSE](LICENSE).
