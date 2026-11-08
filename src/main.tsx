import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root");
// getElementById pode devolver null; este if "prova" ao TypeScript que não é.
if (!container) throw new Error("Elemento #root não encontrado em index.html");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
