// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY! as string,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN! as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID! as string,
  storageBucket: import.meta.env.VITE_FIREBASE_BUCKET! as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING! as string,
  appId: import.meta.env.VITE_APP_ID! as string,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    import.meta.env.VITE_RECAPTCHA_ENTERPRISE_KEY! as string,
  ),
  isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
});
