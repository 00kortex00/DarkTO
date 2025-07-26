import '../inputs.css';
import type { FC } from "react"
import type { InputProps } from '../InputProps';

export const NumberInput: FC<InputProps> = (props) => {
    return (
        <label htmlFor={props.id}>
            <input {...props} className={`darkto-input ${props.className}`} type="number"  />
        </label>
    )
}