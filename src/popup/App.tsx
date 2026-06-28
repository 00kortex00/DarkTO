import { Logo } from "@icons";
import { useEffect, useState } from "preact/hooks";
import { BiSupport } from "react-icons/bi";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

const STORAGE_KEY = "darktoEnabled";
const DEFAULT_ENABLED = true;

export default function App() {
	const [enabled, setEnabled] = useState(DEFAULT_ENABLED);

	useEffect(() => {
		chrome.storage.sync.get({ [STORAGE_KEY]: DEFAULT_ENABLED }, (settings) => {
			setEnabled(Boolean(settings[STORAGE_KEY]));
		});
	}, []);

	const toggleTheme = () => {
		const nextEnabled = !enabled;
		setEnabled(nextEnabled);
		chrome.storage.sync.set({ [STORAGE_KEY]: nextEnabled });
	};

	return (
		<div className="wrapper">
			<h1>
				<Logo className="logo" /> DarkTO
			</h1>
			<button
				className={`theme-toggle ${enabled ? "theme-toggle--enabled" : ""}`}
				type="button"
				onClick={toggleTheme}
				aria-pressed={enabled}
			>
				<span className="theme-toggle__status" />
				{enabled ? "Dark theme on" : "Dark theme off"}
			</button>
			<div className="socials">
				<a
					href="https://dsc.gg/darkto"
					target="_blank"
					rel="noopener"
					aria-label="Discord"
				>
					<FaDiscord />
				</a>
				<a
					href="https://t.me/darkto_dev"
					target="_blank"
					rel="noopener"
					aria-label="Telegram channel"
				>
					<FaTelegramPlane />
				</a>
				<a
					href="https://t.me/kortex00"
					target="_blank"
					rel="noopener"
					aria-label="Support"
				>
					<BiSupport />
				</a>
			</div>
		</div>
	);
}
