import type { ReactNode } from "react"
import { standardThemeManifest } from "./standard/manifest";

export interface ThemeDefinition {
    icon: ReactNode;
    themeComponent: ReactNode;
    name: string;
}

interface Themes {
    [key: string]: ThemeDefinition;
}

export const themes: Themes = {
    "standard": standardThemeManifest
}