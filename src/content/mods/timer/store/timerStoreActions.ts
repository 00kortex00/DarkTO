import { formatNumber } from "@src/content/utils/formatNumber";
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

  setTimerStartTime: (timerStartTime) => {
    const formatedNumber = formatNumber(timerStartTime)
    set({
      timerStartTime: (formatedNumber < 0)? 0 : formatedNumber
    })
  },
  setTimerAddingTime: (timerAddingTime) => {
    const formatedNumber = formatNumber(timerAddingTime)
    set({
      timerAddingTime: (formatedNumber < 0)? 0 : formatedNumber
    })
  },
  setTimerSubtractingTime: (timerSubtractingTime) => {
    const formatedNumber = formatNumber(timerSubtractingTime)
    set({
      timerSubtractingTime: (formatedNumber < 0)? 0 : formatedNumber
    })
  },

  setTimerKeyAddTime: (timerKeyAddTime) => set({ timerKeyAddTime }),
  setTimerKeySubtractTime: (timerKeySubtractTime) => set({ timerKeySubtractTime }),
  setTimerKeyPause: (timerKeyPause) => set({ timerKeyPause }),
  setTimerKeyReset: (timerKeyReset) => set({ timerKeyReset }),
  setTimerKeySwitchVisibility: (timerKeySwitchVisibility) => set({ timerKeySwitchVisibility }),

  setTimerBackgroundColor: (timerBackgroundColor) => set({ timerBackgroundColor }),
  setTimerBackgroundColorEnding: (timerBackgroundColorEnding) => set({ timerBackgroundColorEnding }),
  setTimerTextColor: (timerTextColor) => set({ timerTextColor }),
  setTimerTextEndingColor: (timerTextEndingColor) => set({ timerTextEndingColor }),
  setTimerCornerRadius: (timerCornerRadius) => {
    const formatedNumber = formatNumber(timerCornerRadius);
    set({
      timerCornerRadius: (formatedNumber < 0)? 0 : formatedNumber
    })
  },

  resetDefaults: () => set({ ...timerStoreInitialValues })

});
