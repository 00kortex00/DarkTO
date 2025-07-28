import './ThemesPage.css';

import { NullThemeIcon } from "@src/icons"
import { ThemeCard } from "./components/themeCard/ThemeCard"
import { themes } from '@src/content/themes/themes';
import { useThemeStore } from '@src/content/core/store/themeStore';

export const ThemesPage = () => {
    const { currentTheme, setTheme } = useThemeStore();

    return (
        <div className='themesPage'>
            <h2>Выбор темы</h2>
            <div className="themeSelection">
                <ThemeCard
                    onClick={() => setTheme(null)}
                    name="Без темы" icon={<NullThemeIcon />}
                    selected={(currentTheme === null || !themes[currentTheme])}
                />
                {Object.keys(themes).map((theme) => (
                    <ThemeCard
                        key={`theme-${themes[theme].name}`}
                        onClick={() => setTheme(theme)}
                        name={themes[theme].name} icon={themes[theme].icon}
                        selected={(currentTheme === theme)} 
                    />
                ))}
            </div>
        </div>
    )
}