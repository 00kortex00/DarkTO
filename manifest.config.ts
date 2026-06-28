import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export default defineManifest({
	manifest_version: 3,
	name: pkg.name,
	version: pkg.version,
	icons: {
		16: "public/logo.png",
	},
	action: {
		default_icon: {
			16: "public/logo.png",
		},
		default_popup: "src/popup/index.html",
	},
	permissions: ["contentSettings", "storage"],
	content_scripts: [
		{
			js: ["src/content/main.tsx"],
			matches: ["https://tankionline.com/*"],
		},
	],
});
