import type { FC } from 'react';
import './buttons.css';
import type { ButtonProps } from './typesButton';

export const ButtonDanger: FC<ButtonProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className="darkto__button darkto__button--danger" {...restProps}>
            {children}
        </button>
    )
}