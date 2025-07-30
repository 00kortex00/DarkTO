import type { TimerStoreValues } from "./timerStoreTypes";

export const timerStoreInitialValues: TimerStoreValues = {
    timerPosition: [0, 0],

    isTimerVisible: false,
    isTimerMovable: true,

    timerStartTime: 100,
    timerAddingTime: 5,
    timerSubtractingTime: 10,

    timerKeyAddTime: 'L',
    timerKeySubtractTime: 'J',
    timerKeyPause: 'K',
    timerKeyReset: 'I',
    timerKeySwitchVisibility: 'M',

    timerBackgroundColor: '#000a',
    timerBackgroundColorEnding: '#000a',
    timerCornerRadius: 4,
    timerTextColor: '#fff',
    timerTextEndingColor: '#f00'
}