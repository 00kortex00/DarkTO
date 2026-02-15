import path from "node:path";
import { crx } from "@crxjs/vite-plugin";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import zip from "vite-plugin-zip-pack";
import manifest from "./manifest.config.js";
import { name, version } from "./package.json";

export default defineConfig({
	resolve: {
		alias: {
			"@": `${path.resolve(__dirname, "src")}`,
		},
	},
	plugins: [
		preact(),
		crx({ manifest }),
		zip({ outDir: "release", outFileName: `crx-${name}-${version}.zip` }),
	],
	server: {
		cors: {
			origin: [/chrome-extension:\/\//],
		},
	},
});
