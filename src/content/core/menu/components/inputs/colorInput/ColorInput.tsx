import '../inputs.css';
import './ColorInput.css';

import { type CSSProperties, type Dispatch, type FC, type SetStateAction } from "react";
import { HexAlphaColorPicker } from 'react-colorful';

import type { InputProps } from "../InputProps";

interface ColorInputProps extends InputProps {
    color: string;
    setColor: Dispatch<SetStateAction<string>>
}

export const ColorInput: FC<ColorInputProps> = (props) => {
    const { color, setColor } = props;

    return (
        <label htmlFor={props.id} className="darkto-input--color">
            <input {...props} 
                className={`darkto-input ${props.className}`}
                type="text" value={color}
                onChange={({ target }) => props.setColor(target.value)} 
                style={{
                    '--darkto__color-input_color': color
                } as CSSProperties}
            />
            <div className="darkto__colorInput">
                <HexAlphaColorPicker color={color} onChange={setColor} />
            </div>
        </label>
    )
}