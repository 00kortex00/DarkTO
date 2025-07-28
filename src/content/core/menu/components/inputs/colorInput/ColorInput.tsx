import '../inputs.css';
import './ColorInput.css';

import { type CSSProperties, type Dispatch, type FC, type SetStateAction } from "react";
import { HexAlphaColorPicker } from 'react-colorful';

import type { InputProps } from "../InputProps";

interface ColorInputProps extends InputProps {
    colorState: string;
    setColorState: Dispatch<SetStateAction<string>>
}

export const ColorInput: FC<ColorInputProps> = (props) => {
    const { colorState, setColorState, ...restProps } = props;

    return (
        <label htmlFor={props.id} className="darkto-input--color">
            <input {...restProps} 
                className={`darkto-input ${props.className}`}
                type="text" value={colorState}
                onChange={({ target }) => props.setColorState(target.value)} 
                style={{
                    '--darkto__color-input_color': colorState
                } as CSSProperties}
            />
            <div className="darkto__colorInput">
                <HexAlphaColorPicker color={colorState} onChange={setColorState} />
            </div>
        </label>
    )
}