export interface TimerStoreValues {
    timerPosition: [number, number];

    isTimerVisible: boolean;
    isTimerMovable: boolean;

    timerStartTime: number;
    timerAddingTime: number;
    timerSubtractingTime: number;

    timerKeyAddTime: string;
    timerKeySubtractTime: string;
    timerKeyPause: string;
    timerKeyReset: string;
    timerKeySwitchVisibility: string;

    timerBackgroundColor: string;
    timerBackgroundColorEnding: string;
    timerTextColor: string;
    timerTextEndingColor: string;
    timerCornerRadius: number;
}

export interface TimerStoreActions {
    setTimerPosition: (timerPosition: [number, number]) => void;

    setTimerVisible: (visibility: boolean) => void;
    switchTimerVisible: () => void;

    setTimerMovable: (timerMovable: boolean) => void;
    switchTimerMovable: () => void;

    setTimerStartTime: (seconds: number | string) => void;
    setTimerAddingTime: (seconds: number | string) => void;
    setTimerSubtractingTime: (seconds: number | string) => void;

    setTimerKeyAddTime: (key: string) => void;
    setTimerKeySubtractTime: (key: string) => void;
    setTimerKeyPause: (key: string) => void;
    setTimerKeyReset: (key: string) => void;
    setTimerKeySwitchVisibility: (key: string) => void;

    setTimerBackgroundColor: (color: string) => void;
    setTimerBackgroundColorEnding: (color: string) => void;
    setTimerTextColor: (color: string) => void;
    setTimerTextEndingColor: (color: string) => void;
    setTimerCornerRadius: (radius: number | string) => void;
}

export type TimerStore = TimerStoreActions & TimerStoreValues;
