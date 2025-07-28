import { useTimerStore } from "./store/timerStore"

export const Timer = () => {
    const { isTimerVisible } = useTimerStore();

    return (
        <>
            {isTimerVisible && (
                <div>
                
                </div>
            )}
        </>
    )
}