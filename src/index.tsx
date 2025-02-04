import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

if (!root) {
	console.error("Root element not found");
} else {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
