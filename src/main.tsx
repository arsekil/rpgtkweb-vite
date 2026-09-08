import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppwriteProvider } from "@appwrite.io/react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppwriteProvider
        endpoint={import.meta.env.VITE_APPWRITE_ENDPOINT}
        projectId={import.meta.env.VITE_APPWRITE_PROJECT_ID}
      >
        <App />
      </AppwriteProvider>
    </BrowserRouter>
  </StrictMode>,
);
