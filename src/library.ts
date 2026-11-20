/**
 * Library — saved documents in Firestore, owned by an anonymous user.
 *
 * Sign-in is anonymous (firebase/auth): the user gets a stable uid without
 * any form, and documents live under `users/{uid}/documents`, which the
 * Firestore security rules in README.md restrict to that uid only.
 *
 * All functions are safe to call in demo mode (unconfigured Firebase):
 * they resolve quietly and the UI shows the Library as unavailable.
 */
import {
  onAuthStateChanged,
  signInAnonymously,
  type User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { services } from "./firebase";

export interface SavedDocument {
  id: string;
  title: string;
  original: string;
  simplified: string;
  createdAt: Date | null;
}

let currentUser: User | null = null;
let authReady: Promise<User | null> | null = null;

/** Sign in anonymously (once) and resolve with the user, or null in demo mode. */
export function ensureUser(): Promise<User | null> {
  if (!services) return Promise.resolve(null);
  if (!authReady) {
    const { auth } = services;
    authReady = new Promise((resolve) => {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          currentUser = user;
          unsub();
          resolve(user);
        }
      });
      signInAnonymously(auth).catch((err) => {
        console.warn("[jelas] Anonymous sign-in failed:", err);
        unsub();
        resolve(null);
      });
    });
  }
  return authReady;
}

function docsCollection(uid: string) {
  if (!services) throw new Error("Firestore unavailable");
  return collection(services.db, "users", uid, "documents");
}

export async function saveDocument(
  title: string,
  original: string,
  simplified: string,
): Promise<boolean> {
  const user = await ensureUser();
  if (!user || !services) return false;
  await addDoc(docsCollection(user.uid), {
    title,
    original,
    simplified,
    createdAt: serverTimestamp(),
  });
  return true;
}

export async function listDocuments(): Promise<SavedDocument[]> {
  const user = await ensureUser();
  if (!user || !services) return [];
  const snap = await getDocs(
    query(docsCollection(user.uid), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      title: String(data.title ?? "Untitled"),
      original: String(data.original ?? ""),
      simplified: String(data.simplified ?? ""),
      createdAt: data.createdAt
        ? (data.createdAt as Timestamp).toDate()
        : null,
    };
  });
}

export async function deleteDocument(id: string): Promise<boolean> {
  const user = await ensureUser();
  if (!user || !services) return false;
  await deleteDoc(doc(services.db, "users", user.uid, "documents", id));
  return true;
}

export function isSignedIn(): boolean {
  return currentUser !== null;
}
