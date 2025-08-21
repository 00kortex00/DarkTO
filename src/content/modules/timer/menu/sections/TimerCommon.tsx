import { FormFiled } from "@src/content/core/menu/components/formField/FormField";
import { NumberInput, Switch } from "@src/content/core/menu/components/inputs";
import { useTimerStore } from "../../store/timerStore";

export const TimerCommon = () => {
        const {
            isTimerVisible,
            switchTimerVisible,
    
            isTimerMovable,
            switchTimerMovable,

            timerStartTime,
            timerAddingTime,
            timerSubtractingTime,
            timerEndingTime,

            setTimerStartTime,
            setTimerAddingTime,
            setTimerSubtractingTime,
            setTimerEndingTime
        } = useTimerStore();

    return (
        <>
            <h2>Таймер</h2>
            <FormFiled
                inputElement={
                    <Switch
                        id="darkto__timer__visible"
                        checked={isTimerVisible}
                        onChange={switchTimerVisible}    
                    />
                }
                label="Отображать таймер"
            />

            <FormFiled
                inputElement={
                    <NumberInput
                        id="darkto__timer__start-point"
                        value={String(timerStartTime)}
                        onChange={(event) => setTimerStartTime(event.target.value)}
                    />}
                label="Начальная точка отсчета таймера (сек.)"
            />

            <FormFiled
                inputElement={
                    <NumberInput
                        id="darkto__timer__adding-time"
                        value={String(timerAddingTime)}
                        onChange={(event) => setTimerAddingTime(event.target.value)}
                    />}
                label="Добовляемое время (сек.)"
            />

            <FormFiled
                inputElement={
                    <NumberInput
                        id="darkto__timer__subtracting-time"
                        value={String(timerSubtractingTime)}
                        onChange={(event) => setTimerSubtractingTime(event.target.value)}
                    />}
                label="Отнимаемое время (сек.)"
            />

             <FormFiled
                inputElement={
                    <NumberInput
                        id="darkto__timer__ending-time"
                        value={String(timerEndingTime)}
                        onChange={(event) => setTimerEndingTime(event.target.value)}
                    />}
                label="Истекающее время (сек.)"
            />

            <FormFiled
                inputElement={
                    <Switch
                        id="darkto__timer__move"
                        checked={isTimerMovable}
                        onChange={switchTimerMovable}    
                    />
                }
                label="Передвижение таймера"
            />
        </>
    );
}