import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useTimerStore } from "../store/timerStore";
import { formatKeyCode } from "@src/content/utils/formatKeyCode";

interface TimerHotkeysProps {
    setTimerRunning: Dispatch<SetStateAction<boolean>>;
    setTimeLeft: Dispatch<SetStateAction<number>>;
}

export const TimerHotkeys = ({ setTimerRunning, setTimeLeft }: TimerHotkeysProps) => {
    const {
        timerKeyPause,
        timerKeyAddTime,
        timerKeySubtractTime,
        timerKeyReset,
        timerKeySwitchVisibility,

        timerStartTime,
        timerAddingTime,
        timerSubtractingTime,

        switchTimerVisible
    } = useTimerStore();

    useEffect(
        () => {
            function hotKeyListener(event: KeyboardEvent){
                if(document.activeElement?.tagName == 'INPUT') return;
                switch (formatKeyCode(event.code)) {
                    case timerKeyPause:
                        setTimerRunning((prev) => !prev);
                        break;
                    case timerKeyReset:
                        setTimeLeft(timerStartTime);
                        break;
                    case timerKeyAddTime:
                        setTimeLeft((prev) => prev + timerAddingTime);
                        break;
                    case timerKeySubtractTime:
                        setTimeLeft((prev) => {
                            if(prev - timerSubtractingTime <= 0){
                                return timerStartTime;
                            }
                            return prev - timerSubtractingTime;
                        });
                        break;
                    case timerKeySwitchVisibility:
                        switchTimerVisible();
                        break;
                }
            }

            window.addEventListener('keydown', hotKeyListener);

            return () => {
                window.removeEventListener('keydown', hotKeyListener);
            }
        }, [
            switchTimerVisible,
            setTimeLeft,
            setTimerRunning,

            timerKeyPause,
            timerKeyAddTime,
            timerKeySubtractTime,
            timerKeyReset,
            timerKeySwitchVisibility,

            timerStartTime,
            timerAddingTime,
            timerSubtractingTime
        ]
    );

    return null;
}