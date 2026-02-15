import { render } from "preact";
import App from "./views/App.tsx";

console.log("[CRXJS] Hello world from content script!");

const container = document.createElement("div");
container.id = "crxjs-app";
document.body.appendChild(container);
render(<App />, container);
