export interface TimerStoreValues {
    timerPosition: [number, number];

    isTimerVisible: boolean;
    isTimerMovable: boolean;

    timerStartTime: number;
    timerAddingTime: number;
    timerSubtractingTime: number;
    timerEndingTime: number;

    timerKeyAddTime: string;
    timerKeySubtractTime: string;
    timerKeyPause: string;
    timerKeyReset: string;
    timerKeySwitchVisibility: string;

    timerBlur: number;
    timerCornerRadius: number;
    timerBackgroundColor: string;
    timerTextColor: string;
    timerOutlineSize: number;
    timerOutlineColor: string;


    timerTextEndingColor: string;
    timerBackgroundColorEnding: string;
    timerOutlineSizeEnding: number;
    timerOutlineColorEnding: string;

}

type TimerPositionCallback = (prev: [number, number]) => [number, number];

export interface TimerStoreActions {
    setTimerPosition: (timerPositionCallback: TimerPositionCallback) => void;

    setTimerVisible: (visibility: boolean) => void;
    switchTimerVisible: () => void;

    setTimerMovable: (timerMovable: boolean) => void;
    switchTimerMovable: () => void;

    setTimerStartTime: (seconds: number | string) => void;
    setTimerAddingTime: (seconds: number | string) => void;
    setTimerSubtractingTime: (seconds: number | string) => void;
    setTimerEndingTime: (seconds: number | string) => void;

    setTimerKeyAddTime: (key: string) => void;
    setTimerKeySubtractTime: (key: string) => void;
    setTimerKeyPause: (key: string) => void;
    setTimerKeyReset: (key: string) => void;
    setTimerKeySwitchVisibility: (key: string) => void;

    setTimerBlur: (blur: number | string) => void;
    setTimerBackgroundColor: (color: string) => void;
    setTimerTextColor: (color: string) => void;
    setTimerCornerRadius: (radius: number | string) => void;
    setTimerOutlineSize: (size: number | string) => void;
    setTimerOutlineColor: (color: string) => void;

    setTimerTextEndingColor: (color: string) => void;
    setTimerBackgroundColorEnding: (color: string) => void;
    setTimerOutlineSizeEnding: (size: number | string) => void;
    setTimerOutlineColorEnding: (size: string) => void;

    resetDefaults: () => void;
}

export type TimerStore = TimerStoreActions & TimerStoreValues;
