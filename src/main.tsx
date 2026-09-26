import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { initializeUI } from "@firebase-oss/ui-core";
import { FirebaseUIProvider } from "@firebase-oss/ui-react";
import { recaptchaVerification, requireDisplayName } from "@firebase-oss/ui-core";
import { app } from "./lib/firebase.ts";
import "./index.css";
import App from "./App.tsx";

const ui = initializeUI({
  app,
  behaviors: [
    recaptchaVerification({
      size: "compact",
      theme: "dark",
    }),
    requireDisplayName(),
  ],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseUIProvider ui={ui}>
        <App />
      </FirebaseUIProvider>
    </BrowserRouter>
  </StrictMode>,
);
