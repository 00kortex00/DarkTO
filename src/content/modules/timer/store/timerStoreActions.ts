import { formatNumberPositive } from "@src/content/utils/formatNumber";
import type { TimerStore, TimerStoreActions } from "./timerStoreTypes";
import { timerStoreInitialValues } from "./timerStoreInitialValues";

interface Set {
    (partial: TimerStore | Partial<TimerStore> | ((state: TimerStore) => TimerStore | Partial<TimerStore>), replace?: false): void;
    (state: TimerStore | ((state: TimerStore) => TimerStore), replace: true): void;
}

type CreateTimerStoreActions = (set: Set) => TimerStoreActions;

export const createTimerStoreActions: CreateTimerStoreActions = (set) => ({
  setTimerPosition: (timerPositionCallback) => set((prev) => ({ timerPosition: timerPositionCallback(prev.timerPosition) })),
  
  setTimerVisible: (isTimerVisible) => set({ isTimerVisible }),
  switchTimerVisible: () => set((prev) => ({ isTimerVisible: !prev.isTimerVisible })),

  setTimerMovable: (isTimerMovable) => set({ isTimerMovable }),
  switchTimerMovable: () => set((prev) => ({ isTimerMovable: !prev.isTimerMovable })),

  setTimerStartTime: (timerStartTime) => set({ timerStartTime: formatNumberPositive(timerStartTime) }),
  setTimerAddingTime: (timerAddingTime) => set({ timerAddingTime: formatNumberPositive(timerAddingTime) }),
  setTimerSubtractingTime: (timerSubtractingTime) => set({ timerSubtractingTime: formatNumberPositive(timerSubtractingTime) }),
  setTimerEndingTime: (timerEndingTime) => set({ timerEndingTime: formatNumberPositive(timerEndingTime) }),

  setTimerKeyAddTime: (timerKeyAddTime) => set({ timerKeyAddTime }),
  setTimerKeySubtractTime: (timerKeySubtractTime) => set({ timerKeySubtractTime }),
  setTimerKeyPause: (timerKeyPause) => set({ timerKeyPause }),
  setTimerKeyReset: (timerKeyReset) => set({ timerKeyReset }),
  setTimerKeySwitchVisibility: (timerKeySwitchVisibility) => set({ timerKeySwitchVisibility }),

  setTimerBlur: (timerBlur) => set({ timerBlur: formatNumberPositive(timerBlur) }),
  setTimerBackgroundColor: (timerBackgroundColor) => set({ timerBackgroundColor }),
  setTimerTextColor: (timerTextColor) => set({ timerTextColor }),
  setTimerCornerRadius: (timerCornerRadius) => set({ timerCornerRadius: formatNumberPositive(timerCornerRadius) }),
  setTimerOutlineSize: (timerOutlineSize) => set({ timerOutlineSize: formatNumberPositive(timerOutlineSize) }),
  setTimerOutlineColor: (timerOutlineColor) => set({ timerOutlineColor }),

  setTimerTextEndingColor: (timerTextEndingColor) => set({ timerTextEndingColor }),
  setTimerBackgroundColorEnding: (timerBackgroundColorEnding) => set({ timerBackgroundColorEnding }),
  setTimerOutlineSizeEnding: (timerOutlineSizeEnding) => set({ timerOutlineSizeEnding: formatNumberPositive(timerOutlineSizeEnding) }),
  setTimerOutlineColorEnding: (timerOutlineColorEnding) => set({ timerOutlineColorEnding }),

  resetDefaults: () => set({ ...timerStoreInitialValues })

});
