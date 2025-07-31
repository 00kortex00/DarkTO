import '../inputs.css';
import './HotkeyInput.css';
import { useEffect, useRef, type Dispatch, type FC, type SetStateAction } from "react"
import type { InputProps } from "../InputProps"
import { formatKeyCode } from '@src/content/utils/formatKeyCode';

interface HotkeyInputProps extends InputProps {
    hotkey: string;
    setHotkey: Dispatch<SetStateAction<string>> | ((key: string) => void);
}

export const HotkeyInput: FC<HotkeyInputProps> = (props) => {
    const { hotkey, setHotkey, ...restProps } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            setHotkey(
                formatKeyCode(event.code)
            );
        }

        const input = inputRef.current;
        if(!input) return;

        input.addEventListener('keydown', handleKeyPress);

        return (() => {
            input.removeEventListener('keydown', handleKeyPress);
        });
    }, [setHotkey])

    return (
        <label htmlFor={props.id} className='darkto__hotKeyInput'>
            <input
                ref={inputRef}
                {...restProps}
                className={`darkto-input ${props.className}`}
                type="text"
                value={hotkey}
                autoComplete='off'
                spellCheck='false'
                readOnly
            />
        </label>
    )
}