import type { FC } from 'react';
import './buttons.css';
import type { ButtonProps } from './TypesButton';

export const ButtonPrimary: FC<ButtonProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className="darkto__button" {...restProps}>
            {children}
        </button>
    )
}