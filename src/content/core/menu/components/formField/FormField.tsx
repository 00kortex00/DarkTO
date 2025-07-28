import type { FC, ReactElement, } from "react";
import type { InputProps } from "../inputs/InputProps";
import './FormField.css';

interface FormFiledProps {
    inputElement: ReactElement<InputProps>
    label: string;
}

export const FormFiled: FC<FormFiledProps> = ({ inputElement, label }) => {
    return (
        <div className="darkto-formField">
            {inputElement} {label}
        </div>
    )
}