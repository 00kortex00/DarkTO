import { FormFiled } from "@src/content/core/menu/components/formField/FormField";
import { ColorInput, NumberInput } from "@src/content/core/menu/components/inputs";
import { useTimerStore } from "../../store/timerStore";

export const TimerCustomization = () => {
    const {
        timerCornerRadius,
        setTimerCornerRadius,

        timerBackgroundColor,
        timerBackgroundColorEnding,
        timerTextColor,
        timerTextEndingColor,

        setTimerBackgroundColor,
        setTimerBackgroundColorEnding,
        setTimerTextColor,
        setTimerTextEndingColor

    } = useTimerStore();

    return (
        <>
            <h2>Кастомизация</h2>

            <FormFiled
                inputElement={<NumberInput
                    id="darkto__timer__corner-radius"
                    value={String(timerCornerRadius)}
                    onChange={(event) => setTimerCornerRadius(event.target.value)}
                />}
                label="Скругление углов (px)"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__background-color"
                    colorState={timerBackgroundColor}
                    setColorState={setTimerBackgroundColor}
                />}
                label="Цвет фона"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__text-color"
                    colorState={timerTextColor}
                    setColorState={setTimerTextColor}
                />}
                label="Цвет текста"
            />

                <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__background-color-ending"
                    colorState={timerBackgroundColorEnding}
                    setColorState={setTimerBackgroundColorEnding}
                />}
                label="Цвет фона (время истекает)"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__text-color-ending"
                    colorState={timerTextEndingColor}
                    setColorState={setTimerTextEndingColor}
                />}
                label="Цвет текста (время истекает)"
            />
        </>
    );
}