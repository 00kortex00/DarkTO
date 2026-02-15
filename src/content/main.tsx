import { render } from "preact";
import App from "./App.tsx";

console.log("[DarkTO] Mod initialized");

const container = document.createElement("div");
container.id = "crxjs-app";
document.body.appendChild(container);
render(<App />, container);
