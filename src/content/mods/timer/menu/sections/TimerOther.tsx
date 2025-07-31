import { ButtonDanger } from "@src/content/core/menu/components/buttons/ButtonDanger"
import { ButtonPrimary } from "@src/content/core/menu/components/buttons/ButtonPrimary"
import { useTimerStore } from "../../store/timerStore"

export const TimerOther = () => {
    const { setTimerPosition, resetDefaults } = useTimerStore();

    function resetTimerPosition() {
        setTimerPosition(() => [0, 0]);
    }

    return (
        <>
            <h2>Прочее</h2>
            <div className='darkto__flex-center--h'>
                <ButtonPrimary onClick={resetTimerPosition}>Сбросить расположение</ButtonPrimary>
                <ButtonDanger onClick={resetDefaults}>Восстановить значения по умолчанию</ButtonDanger>
            </div>
        </>
    )
}