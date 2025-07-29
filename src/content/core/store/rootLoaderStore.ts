import { create } from "zustand";
import type { ReactElement } from "react";

interface PagesStore {
    itemsInRoot: ReactElement[];
    addItemToRoot: (item: ReactElement) => void;
}

export const useRootLoaderStore = create<PagesStore>((set) => ({
    itemsInRoot: [],
    addItemToRoot: (item) => set((prev) => ({
        itemsInRoot: [
            ...prev.itemsInRoot,
            item
        ]
    }))
}))