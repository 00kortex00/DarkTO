import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useTimerStore } from "../store/timerStore";

interface TimerIntervalProps {
    timerRunning: boolean;
    setTimeLeft: Dispatch<SetStateAction<number>>;
}

export const TimerInterval = ({ timerRunning, setTimeLeft }: TimerIntervalProps) => {
    const { timerStartTime } = useTimerStore();

    useEffect(() => {
        if(!timerRunning) return;
        let lastUpdate = Date.now();

        const timerInterval = setInterval(() => {
            const now = Date.now();
            const deltaSeconds = (now - lastUpdate) / 1000;
            lastUpdate = now;

            setTimeLeft((prev) => {
                if(prev - deltaSeconds <= 0){
                    return timerStartTime;
                }
                return prev - deltaSeconds;
            });
        }, 1000)

        return () => {
            clearInterval(timerInterval);
        }
    }, [
        timerRunning,
        setTimeLeft,
        timerStartTime
    ]);

    return null;
}