import '../inputs.css';
import type { FC } from "react"
import type { InputProps } from '../InputProps';

export const TextInput: FC<InputProps> = (props) => {
    return (
        <label htmlFor={props.id}>
            <input {...props} className={`darkto-input ${props.className}`} type="text"  />
        </label>
    )
}