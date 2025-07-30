import { ButtonDanger } from "@src/content/core/menu/components/buttons/ButtonDanger"
import { ButtonPrimary } from "@src/content/core/menu/components/buttons/ButtonPrimary"

export const TimerOther = () => {
    return (
        <>
            <h2>Прочее</h2>
            <div className='darkto__flex-center--h'>
                <ButtonPrimary>Сбросить расположение</ButtonPrimary>
                <ButtonDanger>Восстановить значения по умолчанию</ButtonDanger>
            </div>
        </>
    )
}