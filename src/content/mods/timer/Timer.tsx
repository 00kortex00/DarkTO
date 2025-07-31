import { formatTime } from '@src/content/utils/formatTime';
import './Timer.css';
import { useTimerStore } from "./store/timerStore"
import { useState, type CSSProperties } from 'react';
import { TimerHotkeys } from './components/TimerHotkeys';
import { TimerInterval } from './components/TimerInterval';
import { TimerMove } from './components/TimerMove';

export const Timer = () => {
    const {
        timerStartTime,

        isTimerVisible,
        isTimerMovable,

        timerBackgroundColor,
        timerTextColor,
        timerBackgroundColorEnding,
        timerTextEndingColor,
        timerCornerRadius,

        timerPosition
    } = useTimerStore();

    const [timerElement, setTimerElement] = useState<HTMLDivElement | null>(null);

    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(timerStartTime);

    return (
        <>
            <TimerInterval setTimeLeft={setTimeLeft} timerRunning={timerRunning} />
            <TimerHotkeys setTimeLeft={setTimeLeft} setTimerRunning={setTimerRunning} />
            <TimerMove timerElement={timerElement} />

            {isTimerVisible && (
                <div
                    ref={setTimerElement}
                    className={`darkto-timer ${isTimerMovable && 'movable'} ${(timeLeft <= 10) && 'ending'}`}
                    style={{
                        '--timer-color-background': timerBackgroundColor,
                        '--timer-color-primary': timerTextColor,
                        '--timer-color-background-ending': timerBackgroundColorEnding,
                        '--timer-color-primary-ending': timerTextEndingColor,
                        '--timer-corner-radius': `${timerCornerRadius}px`,
                        '--timer-position-x': `${timerPosition[0]}px`,
                        '--timer-position-y': `${timerPosition[1]}px`
                    }as CSSProperties}
                >
                    {formatTime(timeLeft)}
                </div>
            )}
        </>
    )
}