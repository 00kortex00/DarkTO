import { useState } from "react"
import { FormFiled } from "../../../core/menu/components/formField/FormField"
import { Section } from "../../../core/menu/components/section/Section"
import { ColorInput, HotkeyInput, NumberInput, Switch, TextInput } from "../../../core/menu/components/inputs";

export const TimerPage = () => {
    const [timerBackgroundColor, setTimerBackgroundColor] = useState('#ff0000ff');
    const [key, setKey] = useState('L');

    return (
        <div>
            <Section title="Таймер">
                <FormFiled
                    inputElement={<NumberInput id="darkto__timer__start-point" />}
                    label="Начальная точка отсчета таймера (сек.)"
                />

                <FormFiled
                    inputElement={<TextInput id="darkto__timer__testText" />}
                    label="Тест"
                />

                <FormFiled
                    inputElement={<ColorInput
                        id="darkto__timer__text-color"
                        colorState={timerBackgroundColor}
                        setColorState={setTimerBackgroundColor}
                    />}
                    label="Цвет фона"
                />

                <FormFiled
                    inputElement={<Switch id="darkto__timer__move" />}
                    label="Передвижение таймера"
                />

                <FormFiled
                    inputElement={<HotkeyInput id="darkto__timer__hotkey-test" hotkey={key} setHotkey={setKey} />}
                    label="Test"
                />
            </Section>
        </div>
    )
}