import { useEffect, useState } from "preact/hooks";

const STORAGE_KEY = "darktoEnabled";
const STYLE_ID = "darkto-theme-style";
const DEFAULT_ENABLED = true;

const DARK_THEME_CSS = `
html.darkto-enabled,
html.darkto-enabled body {
	background: #050505 !important;
	color: #d8d8d8 !important;
}

html.darkto-enabled body,
html.darkto-enabled main,
html.darkto-enabled section,
html.darkto-enabled article,
html.darkto-enabled aside,
html.darkto-enabled header,
html.darkto-enabled footer,
html.darkto-enabled nav,
html.darkto-enabled div {
	border-color: #2a2a2a !important;
}

html.darkto-enabled a {
	color: #ff6b6b !important;
}

html.darkto-enabled input,
html.darkto-enabled textarea,
html.darkto-enabled select,
html.darkto-enabled button {
	background-color: #151515 !important;
	border-color: #3a3a3a !important;
	color: #f0f0f0 !important;
}

html.darkto-enabled img,
html.darkto-enabled video,
html.darkto-enabled canvas,
html.darkto-enabled iframe,
html.darkto-enabled [style*="background-image"] {
	filter: brightness(0.86) contrast(1.08) !important;
}

html.darkto-enabled ::selection {
	background: #a00 !important;
	color: #fff !important;
}
`;

function setThemeEnabled(enabled: boolean) {
	document.documentElement.classList.toggle("darkto-enabled", enabled);

	const existingStyle = document.getElementById(STYLE_ID);

	if (enabled && !existingStyle) {
		const style = document.createElement("style");
		style.id = STYLE_ID;
		style.textContent = DARK_THEME_CSS;
		document.head.appendChild(style);
	}

	if (!enabled && existingStyle) {
		existingStyle.remove();
	}
}

function App() {
	const [enabled, setEnabled] = useState(DEFAULT_ENABLED);

	useEffect(() => {
		chrome.storage.sync.get({ [STORAGE_KEY]: DEFAULT_ENABLED }, (settings) => {
			const nextEnabled = Boolean(settings[STORAGE_KEY]);
			setEnabled(nextEnabled);
			setThemeEnabled(nextEnabled);
		});

		const handleStorageChange = (
			changes: Record<string, chrome.storage.StorageChange>,
			areaName: string,
		) => {
			if (areaName !== "sync" || !changes[STORAGE_KEY]) {
				return;
			}

			const nextEnabled = Boolean(changes[STORAGE_KEY].newValue);
			setEnabled(nextEnabled);
			setThemeEnabled(nextEnabled);
		};

		chrome.storage.onChanged.addListener(handleStorageChange);

		return () => {
			chrome.storage.onChanged.removeListener(handleStorageChange);
			setThemeEnabled(false);
		};
	}, []);

	return (
		<span
			aria-hidden="true"
			data-darkto-state={enabled ? "enabled" : "disabled"}
			style={{ display: "none" }}
		/>
	);
}

export default App;
