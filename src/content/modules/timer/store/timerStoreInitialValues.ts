import type { TimerStoreValues } from "./timerStoreTypes";

export const timerStoreInitialValues: TimerStoreValues = {
    timerPosition: [0, 0],

    isTimerVisible: false,
    isTimerMovable: true,

    timerStartTime: 100,
    timerAddingTime: 5,
    timerSubtractingTime: 10,
    timerEndingTime: 10,

    timerKeyAddTime: 'L',
    timerKeySubtractTime: 'J',
    timerKeyPause: 'K',
    timerKeyReset: 'I',
    timerKeySwitchVisibility: 'M',

    timerBlur: 4,
    timerCornerRadius: 8,
    timerBackgroundColor: '#000a',
    timerTextColor: '#fff',
    timerOutlineSize: 0,
    timerOutlineColor: '#f00',

    timerBackgroundColorEnding: '#000a',
    timerTextEndingColor: '#f00',
    timerOutlineSizeEnding: 2,
    timerOutlineColorEnding: '#f00'
}