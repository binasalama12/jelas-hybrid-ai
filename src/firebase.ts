/**
 * Firebase service initialisation.
 *
 * Everything here is guarded by `isConfigured` (see firebase-config.ts):
 * when the config is still a placeholder we export `null` services and let
 * the UI degrade gracefully instead of throwing at import time.
 *
 * Services used by Jelas:
 *  - App            (firebase/app)
 *  - App Check      (firebase/app-check)   — required by the hackathon rules
 *  - Auth           (firebase/auth)        — anonymous sign-in for the Library
 *  - Firestore      (firebase/firestore)   — saved documents
 *  - Remote Config  (firebase/remote-config) — feature flags / limits
 *  - AI Logic       (firebase/ai)          — initialised in src/ai.ts
 */
import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  type AppCheck,
} from "firebase/app-check";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import {
  fetchAndActivate,
  getBoolean,
  getNumber,
  getRemoteConfig,
  type RemoteConfig,
} from "firebase/remote-config";
import { appCheckSiteKey, firebaseConfig, isConfigured } from "./firebase-config";

/** Remote Config defaults — also the fallback when the fetch fails. */
export interface JelasRemoteSettings {
  /** Master switch for cloud-routed features (explain / Q&A / checklist). */
  cloudEnabled: boolean;
  /** Maximum characters accepted in the document input. */
  maxInputChars: number;
}

export const remoteDefaults: JelasRemoteSettings = {
  cloudEnabled: true,
  maxInputChars: 6000,
};

export interface FirebaseServices {
  app: FirebaseApp;
  appCheck: AppCheck | null;
  auth: Auth;
  db: Firestore;
  remoteConfig: RemoteConfig;
}

function initServices(): FirebaseServices | null {
  if (!isConfigured) return null;

  const app = initializeApp(firebaseConfig);

  // App Check with debug-token support for local development.
  // In dev builds we opt into the debug provider flow: register the printed
  // debug token in the Firebase Console (App Check → Apps → Manage debug
  // tokens). In production the reCAPTCHA v3 provider is used.
  let appCheck: AppCheck | null = null;
  try {
    if (import.meta.env.DEV) {
      (self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean })[
        "FIREBASE_APPCHECK_DEBUG_TOKEN"
      ] = true;
    }
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (err) {
    // App Check must never take the whole app down.
    console.warn("[jelas] App Check initialisation skipped:", err);
  }

  const remoteConfig = getRemoteConfig(app);
  remoteConfig.settings = {
    minimumFetchIntervalMillis: 60_000,
    fetchTimeoutMillis: 10_000,
  };
  remoteConfig.defaultConfig = { ...remoteDefaults };

  return {
    app,
    appCheck,
    auth: getAuth(app),
    db: getFirestore(app),
    remoteConfig,
  };
}

export const services: FirebaseServices | null = initServices();

/**
 * Fetch Remote Config (best effort) and return the effective settings.
 * Always resolves — failures fall back to `remoteDefaults`.
 */
export async function loadRemoteSettings(): Promise<JelasRemoteSettings> {
  if (!services) return { ...remoteDefaults };
  try {
    await fetchAndActivate(services.remoteConfig);
  } catch (err) {
    console.warn("[jelas] Remote Config fetch failed, using defaults:", err);
  }
  return {
    cloudEnabled: getBoolean(services.remoteConfig, "cloudEnabled"),
    maxInputChars: getNumber(services.remoteConfig, "maxInputChars"),
  };
}
