import type { TimerStore, TimerStoreActions } from "./timerStoreTypes";

interface Set {
    (partial: TimerStore | Partial<TimerStore> | ((state: TimerStore) => TimerStore | Partial<TimerStore>), replace?: false): void;
    (state: TimerStore | ((state: TimerStore) => TimerStore), replace: true): void;
}

type CreateTimerStoreActions = (set: Set) => TimerStoreActions;

export const createTimerStoreActions: CreateTimerStoreActions = (set) => ({
  setTimerVisible: (isTimerVisible: boolean) => set({ isTimerVisible }),
  switchTimerVisible: () => set((prev: TimerStore) => ({ isTimerVisible: !prev.isTimerVisible })),

  setTimerMovable: (isTimerMovable: boolean) => set({ isTimerMovable }),
  switchTimerMovable: () => set((prev: TimerStore) => ({ isTimerMovable: !prev.isTimerMovable })),

  setTimerTimes: (timerTimes: Partial<TimerStore["timerTimes"]>) =>
    set((prev: TimerStore) => ({
      timerTimes: {
        ...prev.timerTimes,
        ...timerTimes,
      },
    })),

  setTimerKeyBinds: (timerKeyBinds: Partial<TimerStore["timerKeyBinds"]>) =>
    set((prev: TimerStore) => ({
      timerKeyBinds: {
        ...prev.timerKeyBinds,
        ...timerKeyBinds,
      },
    })),

  setTimerCustomization: (timerCustomization: Partial<TimerStore["timerCustomization"]>) =>
    set((prev: TimerStore) => ({
      timerCustomization: {
        ...prev.timerCustomization,
        ...timerCustomization,
      },
    }))
});
