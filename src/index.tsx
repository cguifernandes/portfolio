import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import App from "./app";
import { TooltipProvider } from "./components/tooltip";

const root = document.getElementById("root");

if (!root) {
  console.error("Elemento root não foi encontrado.");
} else {
  createRoot(root).render(
    <StrictMode>
      <TooltipProvider>
        <Toaster />
        <App />
      </TooltipProvider>
    </StrictMode>,
  );
}
