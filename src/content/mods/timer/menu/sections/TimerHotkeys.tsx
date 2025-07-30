import { FormFiled } from "@src/content/core/menu/components/formField/FormField";
import { HotkeyInput } from "@src/content/core/menu/components/inputs";
import { useTimerStore } from "../../store/timerStore";

export const TimerHotkeys = () => {
    const {
        timerKeySwitchVisibility,
        timerKeyPause,
        timerKeyReset,
        timerKeyAddTime,
        timerKeySubtractTime,

        setTimerKeySwitchVisibility,
        setTimerKeyPause,
        setTimerKeyReset,
        setTimerKeyAddTime,
        setTimerKeySubtractTime
    } = useTimerStore();

    return (
        <>
            <h2>Горячие клавиши</h2>
            <FormFiled
                inputElement={
                    <HotkeyInput
                        id="darkto__timer__hotkey-visibility"
                        hotkey={timerKeySwitchVisibility}
                        setHotkey={setTimerKeySwitchVisibility} 
                />}
                label="Показать / Скрыть таймер"
            />

             <FormFiled
                inputElement={
                    <HotkeyInput
                        id="darkto__timer__hotkey-pause"
                        hotkey={timerKeyPause}
                        setHotkey={setTimerKeyPause} 
                />}
                label="Запустить / Остановить таймер"
            />

             <FormFiled
                inputElement={
                    <HotkeyInput
                        id="darkto__timer__hotkey-reset"
                        hotkey={timerKeyReset}
                        setHotkey={setTimerKeyReset} 
                />}
                label="Сбросить таймер"
            />

             <FormFiled
                inputElement={
                    <HotkeyInput
                        id="darkto__timer__hotkey-add"
                        hotkey={timerKeyAddTime}
                        setHotkey={setTimerKeyAddTime} 
                />}
                label="Добавить время"
            />

             <FormFiled
                inputElement={
                    <HotkeyInput
                        id="darkto__timer__hotkey-subtract"
                        hotkey={timerKeySubtractTime}
                        setHotkey={setTimerKeySubtractTime} 
                />}
                label="Отнять время"
            />
        </>
    );
}