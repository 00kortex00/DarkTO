import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
    currentTheme: null | string;
    setTheme: (theme: string | null) => void;
}

const themeStore: StateCreator<ThemeStore> = ((set) => ({
    currentTheme: null,
    setTheme: (currentTheme) => set({ currentTheme })
}));

export const useThemeStore = create<ThemeStore>()(
    persist(
        themeStore,
        {
            name: 'darkto-theme'
        }
    )
);