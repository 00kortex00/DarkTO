import { FormFiled } from "@src/content/core/menu/components/formField/FormField";
import { ColorInput, NumberInput } from "@src/content/core/menu/components/inputs";
import { useTimerStore } from "../../store/timerStore";

export const TimerCustomization = () => {
    const {
        timerCornerRadius,
        setTimerCornerRadius,

        timerBlur,
        timerBackgroundColor,
        timerTextColor,
        timerOutlineSize,
        timerOutlineColor,

        timerTextEndingColor,
        timerBackgroundColorEnding,
        timerOutlineSizeEnding,
        timerOutlineColorEnding,

        setTimerBlur,
        setTimerBackgroundColor,
        setTimerTextColor,
        setTimerOutlineSize,
        setTimerOutlineColor,

        setTimerBackgroundColorEnding,
        setTimerTextEndingColor,
        setTimerOutlineSizeEnding,
        setTimerOutlineColorEnding

    } = useTimerStore();

    return (
        <>
            <h2>Кастомизация</h2>

            <FormFiled
                inputElement={<NumberInput
                    id="darkto__timer__blur"
                    value={String(timerBlur)}
                    onChange={(event) => setTimerBlur(event.target.value)}
                />}
                label="Размытие фона (px)"
            />

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
                inputElement={<NumberInput
                    id="darkto__timer_outline-size"
                    value={String(timerOutlineSize)}
                    onChange={(event) => setTimerOutlineSize(event.target.value)}
                />}
                label="Размер рамки (px)"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__outline-color"
                    colorState={timerOutlineColor}
                    setColorState={setTimerOutlineColor}
                />}
                label="Цвет рамки"
            />

            <h2>Кастомизация <br /> (время истекает)</h2>

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__background-color-ending"
                    colorState={timerBackgroundColorEnding}
                    setColorState={setTimerBackgroundColorEnding}
                />}
                label="Цвет фона"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__text-color-ending"
                    colorState={timerTextEndingColor}
                    setColorState={setTimerTextEndingColor}
                />}
                label="Цвет текста"
            />

            <FormFiled
                inputElement={<NumberInput
                    id="darkto__timer_outline-size-ending"
                    value={String(timerOutlineSizeEnding)}
                    onChange={(event) => setTimerOutlineSizeEnding(event.target.value)}
                />}
                label="Размер рамки (px)"
            />

            <FormFiled
                inputElement={<ColorInput
                    id="darkto__timer__outline-color-ending"
                    colorState={timerOutlineColorEnding}
                    setColorState={setTimerOutlineColorEnding}
                />}
                label="Цвет рамки"
            />
        </>
    );
}