import type { TimerStore, TimerStoreActions } from "./timerStoreTypes";

interface Set {
    (partial: TimerStore | Partial<TimerStore> | ((state: TimerStore) => TimerStore | Partial<TimerStore>), replace?: false): void;
    (state: TimerStore | ((state: TimerStore) => TimerStore), replace: true): void;
}

type CreateTimerStoreActions = (set: Set) => TimerStoreActions;

export const createTimerStoreActions: CreateTimerStoreActions = (set) => ({
  setTimerPosition: (timerPosition) => set({ timerPosition }),
  
  setTimerVisible: (isTimerVisible) => set({ isTimerVisible }),
  switchTimerVisible: () => set((prev) => ({ isTimerVisible: !prev.isTimerVisible })),

  setTimerMovable: (isTimerMovable) => set({ isTimerMovable }),
  switchTimerMovable: () => set((prev) => ({ isTimerMovable: !prev.isTimerMovable })),

  setTimerTimes: (timerTimes) =>
    set((prev) => ({
      timerTimes: {
        ...prev.timerTimes,
        ...timerTimes,
      },
    })),

  setTimerKeyBinds: (timerKeyBinds) =>
    set((prev) => ({
      timerKeyBinds: {
        ...prev.timerKeyBinds,
        ...timerKeyBinds,
      },
    })),

  setTimerCustomization: (timerCustomization) =>
    set((prev) => ({
      timerCustomization: {
        ...prev.timerCustomization,
        ...timerCustomization,
      },
    }))
});
