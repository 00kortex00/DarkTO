import { create } from "zustand";

interface MenuStore {
    currentPage: number,
    setCurrentPage: (page: number) => void
}

export const useMenuStore = create<MenuStore>((set) => ({
    currentPage: 0,
    setCurrentPage: (currentPage) => set({ currentPage })
}))