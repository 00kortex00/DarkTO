import { AccountsPage } from "./accountsPage/AccountsPage";
import { SettingsPage } from "./settingsPage/SettingsPage";
import { ThemesPage } from "./themesPage/ThemesPage";
import { TimerPage } from "./timerPage/TimerPage";

export const pages = [
    ["Темы", <ThemesPage />],
    ["Таймер", <TimerPage />],
    ["Аккаунты", <AccountsPage />],
    ["Настройки", <SettingsPage />]
]