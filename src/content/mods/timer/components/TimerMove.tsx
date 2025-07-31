import { useEffect } from "react";
import { useTimerStore } from "../store/timerStore";

interface TimerMoveProps {
    timerElement:  HTMLDivElement | null;
}

export const TimerMove = ({ timerElement }: TimerMoveProps) => {
    const { isTimerMovable, setTimerPosition } = useTimerStore();

    useEffect(() => {
        if(!isTimerMovable) return;

        const timer = timerElement;
        if(!timer) return;
        
        let timerMoving = false;

        function mouseDownEventHandler() {
            timerMoving = true;
        }

        function mouseUpEventHandler() {
            timerMoving = false;
        }

        function mouseMoveEventHandler(event: MouseEvent) {
            if(!timerMoving) return;
            const { movementX, movementY } = event;
            
            setTimerPosition((prev) => [
                prev[0] + movementX,
                prev[1] + movementY
            ])
        }

        timer.addEventListener('mousedown', mouseDownEventHandler);
        window.addEventListener('mousemove', mouseMoveEventHandler);
        window.addEventListener('mouseup', mouseUpEventHandler);

        return () => {
            timer.removeEventListener('mousedown', mouseDownEventHandler);
            window.removeEventListener('mousemove', mouseMoveEventHandler);
            window.removeEventListener('mouseup', mouseUpEventHandler);
        }
    }, [timerElement, isTimerMovable, setTimerPosition])

    return null;
}