import { formatTime } from '@src/content/utils/formatTime';
import './Timer.css';
import { useTimerStore } from "./store/timerStore"
import { useState, type CSSProperties } from 'react';
import { TimerHotkeys } from './components/TimerHotkeys';
import { TimerInterval } from './components/TimerInterval';
import { TimerMove } from './components/TimerMove';

export const Timer = () => {
    const {
        timerPosition,
        timerStartTime,
        timerEndingTime,

        isTimerVisible,
        isTimerMovable,

        timerBlur,
        timerTextColor,
        timerTextEndingColor,
        timerCornerRadius,
        timerOutlineSize,
        timerOutlineColor,

        timerBackgroundColor,
        timerBackgroundColorEnding,
        timerOutlineSizeEnding,
        timerOutlineColorEnding

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
                    className={`darkto-timer ${isTimerMovable && 'movable'} ${(Math.floor(timeLeft) <= timerEndingTime) && 'ending'}`}
                    style={{
                        '--timer-position-x': `${timerPosition[0]}px`,
                        '--timer-position-y': `${timerPosition[1]}px`,

                        '--timer-blur': `${timerBlur}px`,
                        '--timer-color-background': timerBackgroundColor,
                        '--timer-color-primary': timerTextColor,
                        '--timer-corner-radius': `${timerCornerRadius}px`,
                        '--timer-outline-size': `${timerOutlineSize}px`,
                        '--timer-outline-color': timerOutlineColor,

                        '--timer-color-background-ending': timerBackgroundColorEnding,
                        '--timer-color-primary-ending': timerTextEndingColor,
                        '--timer-outline-size-ending': `${timerOutlineSizeEnding}px`,
                        '--timer-outline-color-ending': timerOutlineColorEnding
                    }as CSSProperties}
                >
                    {formatTime(timeLeft)}
                </div>
            )}
        </>
    )
}