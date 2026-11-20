/**
 * Firebase project configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  SETUP: replace every "REPLACE_ME" value below with the web config from
 *  your own Firebase project (Firebase Console → Project settings →
 *  "Your apps" → Web app). That is the ONLY change needed to wire Jelas to
 *  a live backend — see README.md, "Getting started".
 *
 *  While any value is still a placeholder, `isConfigured` is false and the
 *  app runs in a safe demo mode: the UI loads, status panels explain what
 *  is missing, and no network calls are attempted.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { FirebaseOptions } from "firebase/app";

export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDWhXi3-KCL8bA1KBM7KqrMYATy4G7Y8YA",
  authDomain: "jelas-hybrid-ai.firebaseapp.com",
  projectId: "jelas-hybrid-ai",
  storageBucket: "jelas-hybrid-ai.firebasestorage.app",
  messagingSenderId: "328163563317",
  appId: "1:328163563317:web:55599a2f36932b3448de7c",
};

/**
 * reCAPTCHA v3 site key used by App Check. Create it in the Firebase
 * Console (App Check → Apps → Web) and paste it here.
 */
export const appCheckSiteKey: string = "6LcSkCkuAAAAAIVT9BPDtR7gaTyczwqHdufmdWR-";

/** True only when every placeholder above has been replaced. */
export const isConfigured: boolean =
  !Object.values(firebaseConfig).some((v) => v === "REPLACE_ME") &&
  appCheckSiteKey !== "REPLACE_ME";
