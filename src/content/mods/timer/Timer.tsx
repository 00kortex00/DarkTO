import { formatTime } from '@src/content/utils/formatTime';
import './Timer.css';
import { useTimerStore } from "./store/timerStore"
import type { CSSProperties } from 'react';

export const Timer = () => {
    const {
        isTimerVisible,
        isTimerMovable,

        timerBackgroundColor,
        timerTextColor,
        timerBackgroundColorEnding,
        timerTextEndingColor
    } = useTimerStore();
    const timeLeft = 100;

    return (
        <>
            {isTimerVisible && (
                <div
                    className={`darkto-timer ${isTimerMovable && 'movable'} ${(timeLeft <= 10) && 'ending'}`}
                    style={{
                        '--timer-color-background': timerBackgroundColor,
                        '--timer-color-primary': timerTextColor,
                        '--timer-color-background-ending': timerBackgroundColorEnding,
                        '--timer-color-primary-ending': timerTextEndingColor
                    }as CSSProperties}
                >
                    {formatTime(timeLeft)}
                </div>
            )}
        </>
    )
}