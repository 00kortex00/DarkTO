import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import type { TimerStore } from "./timerStoreTypes";
import { timerStoreInitialValues } from "./timerStoreInitialValues";
import { createTimerStoreActions } from "./timerStoreActions";

const timerStore: StateCreator<TimerStore> = ((set) => ({
    ...timerStoreInitialValues,
    ...createTimerStoreActions(set)
}));

export const useTimerStore = create<TimerStore>()(
    persist(
        timerStore,
        {
            name: 'darkto-timer'
        }
    )
);