import { DarktoLogo } from "@src/icons";
import type { ThemeDefinition } from "../themes";
import { StandardTheme } from "./StandardTheme";

export const standardThemeManifest: ThemeDefinition = {
    "name": "Стандартная",
    "icon": <DarktoLogo />,
    "themeComponent": <StandardTheme />
}