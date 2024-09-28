import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    console.log("A new version of the app is available. Please refresh.");
  },
  onOfflineReady() {
    console.log("The app is ready to be used offline.");
  },
  onRegistered(registration) {
    console.log("Service Worker registered: ", registration);
  },
  onRegisterError(error) {
    console.error("Service Worker registration error: ", error);
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
