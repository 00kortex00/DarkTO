import { TimerPage } from "@src/content/mods/timer/menu/TimerPage";
import { AccountsPage } from "./accountsPage/AccountsPage";
import { SettingsPage } from "./settingsPage/SettingsPage";
import { ThemesPage } from "./themesPage/ThemesPage";

export const pages = [
    ["Темы", <ThemesPage />],
    ["Таймер", <TimerPage />],
    ["Аккаунты", <AccountsPage />],
    ["Настройки", <SettingsPage />]
]