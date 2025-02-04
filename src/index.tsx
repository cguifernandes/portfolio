import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./app";

const root = document.getElementById("root");

if (!root) {
	console.error("Elemento root não foi encontrado.");
} else {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
