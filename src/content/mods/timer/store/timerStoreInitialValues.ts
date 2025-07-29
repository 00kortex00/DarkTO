import type { TimerStoreValues } from "./timerStoreTypes";

export const timerStoreInitialValues: TimerStoreValues = {
    isTimerVisible: false,
    isTimerMovable: true,

    timerTimes: {
        addingTime: 5,
        subtractTime: 10,
        startTime: 100
    },

    timerKeyBinds: {
        addTime: 'L',
        subtractTime: 'J',
        pause: 'K',
        reset: 'I',
        switchVisibility: 'M'
    },

    timerCustomization: {
        backgroundColor: '#000a',
        backgroundColorEnding: '#000a',
        cornerRadius: 4,
        textColor: '#fff',
        textEndingColor: '#f00'
    },

    timerPosition: [0, 0]
}