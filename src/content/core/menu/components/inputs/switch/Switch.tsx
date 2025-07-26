import './Switch.css';
import type { FC } from "react"
import type { InputProps } from "../InputProps"

export const Switch: FC<InputProps> = (props) => {
    return (
        <label htmlFor={props.id} className='darkto__switch'>
            <input {...props} type="checkbox" />
        </label>
    )
}