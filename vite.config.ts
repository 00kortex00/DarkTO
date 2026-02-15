import path from "node:path";
import { crx } from "@crxjs/vite-plugin";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import zip from "vite-plugin-zip-pack";
import manifest from "./manifest.config.js";
import { name, version } from "./package.json";

export default defineConfig({
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react/jsx-runtime": "preact/jsx-runtime",

			"@icons": `${path.resolve(__dirname, "src/assets/icons")}`,
			"@": `${path.resolve(__dirname, "src")}`,
		},
	},
	plugins: [
		ViteImageOptimizer(),
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
