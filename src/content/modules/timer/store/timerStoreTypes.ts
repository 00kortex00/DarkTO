export interface TimerTimes {
    startTime: number;
    addingTime: number;
    subtractTime: number;
}

export interface TimerKeyBinds {
    switchVisibility: string;
    pause: string;
    reset: string;
    addTime: string;
    subtractTime: string;
}

export interface TimerCustomization {
    cornerRadius: number;
    backgroundColor: string;
    textColor: string;
    backgroundColorEnding: string;
    textEndingColor: string;
}

export interface TimerStoreActions {
    setTimerPosition: (timerPosition: [number, number]) => void;

    setTimerVisible: (visibility: boolean) => void;
    switchTimerVisible: () => void;

    setTimerMovable: (timerMovable: boolean) => void;
    switchTimerMovable: () => void;

    setTimerTimes: (timerTimes: Partial<TimerTimes>) => void;
    setTimerKeyBinds: (timerKeyBinds: Partial<TimerKeyBinds>) => void;
    setTimerCustomization: (timerCustomization: Partial<TimerCustomization>) => void;
}

export interface TimerStoreValues {
    timerPosition: [number, number];
    isTimerVisible: boolean;
    isTimerMovable: boolean;
    timerTimes: TimerTimes;
    timerKeyBinds: TimerKeyBinds;
    timerCustomization: TimerCustomization;
}

export type TimerStore = TimerStoreActions & TimerStoreValues;
