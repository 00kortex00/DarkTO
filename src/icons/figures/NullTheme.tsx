import type { IconProps } from "..";

const NullTheme = (iconProps: IconProps) => (
    <svg {...iconProps} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="2"/>
        <line x1="61.7071" y1="4.70711" x2="5.13857" y2="61.2757" stroke="currentColor" strokeWidth="2"/>
    </svg>
)

export default NullTheme;