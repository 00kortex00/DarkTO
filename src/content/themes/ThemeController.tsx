import { useEffect } from "react";
import { useThemeStore } from "../core/store/themeStore";
import { themes } from "./themes";

export const ThemeController = () => {
    const { currentTheme } = useThemeStore();

    useEffect(() => {
        if(currentTheme === null || !themes[currentTheme]) {
            document.body.setAttribute('data-darktoTheme', '');
            return;
        }
        document.body.setAttribute('data-darktoTheme', currentTheme);
    }, [currentTheme])

    return (
        null
    );
}