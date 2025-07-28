import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import type { TimerStore } from "./timerStoreTypes";
import { timerStoreInitialValues } from "./timerStoreInitialValues.ts";
import { createTimerStoreActions } from "./timerStoreActions.ts";

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