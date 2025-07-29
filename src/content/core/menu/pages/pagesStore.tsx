import { create } from "zustand";
import { ThemesPage } from "./themesPage/ThemesPage";
import { SettingsPage } from "./settingsPage/SettingsPage";
import type { ReactNode } from "react";

type AddingPage = [string, ReactNode];

type Page = [string, () => ReactNode]

interface PagesStore {
    pages: Page[];
    addPage: (...page: AddingPage) => void;
}

export const usePagesStore = create<PagesStore>((set) => ({
    pages: [
        ["Темы", () => (<ThemesPage />)],
        ["Настройки", () => (<SettingsPage />)]
    ],
    addPage: (...page) => set((prev) => ({ pages: [
        ...prev.pages.slice(0, 1),
        [page[0], () => page[1]],
        ...prev.pages.slice(1)
    ]  }))
}))