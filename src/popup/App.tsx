import { Logo } from "@icons";
import { BiSupport } from "react-icons/bi";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

export default function App() {
	return (
		<div className="wrapper">
			<h1>
				<Logo className="logo" /> DarkTO
			</h1>
			<div className="socials">
				<a href="https://dsc.gg/darkto" target="_blank" rel="noopener">
					<FaDiscord />
				</a>
				<a href="https://t.me/darkto_dev" target="_blank" rel="noopener">
					<FaTelegramPlane />
				</a>
				<a href="https://t.me/kortex00" target="_blank" rel="noopener">
					<BiSupport />
				</a>
			</div>
		</div>
	);
}
