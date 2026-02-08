import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { HashRouter } from "react-router-dom";

// --- BLOQUE DE DETECCIÓN DE MODO OSCURO ---
// Esto evita el "flashazo" blanco al recargar si el usuario prefiere dark mode
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
// ------------------------------------------

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
