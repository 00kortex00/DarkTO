import { useState } from "react"
import { ColorInput } from "../../components/inputs/colorInput/ColorInput"
import { FormFiled } from "../../components/formField/FormField"
import { NumberInput } from "../../components/inputs/numberInput/NumberInput"
import { TextInput } from "../../components/inputs/textInput/TextInput"
import { Section } from "../../components/section/Section"
import { Switch } from "../../components/inputs/switch/Switch"
import { HotkeyInput } from "../../components/inputs/hotkeyInput/HotkeyInput"

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
                        color={timerBackgroundColor}
                        setColor={setTimerBackgroundColor}
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