import './ThemeCard.css';
import type { MouseEventHandler, ReactNode } from "react"

interface ThemeCardProps {
    name: string,
    icon?: ReactNode,
    selected?: boolean,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const ThemeCard = ({ name, icon, selected, onClick }: ThemeCardProps) => {
    return (
        <div onClick={onClick} className={`themeCard ${selected && 'selected'}`}>
            <h3>{name}</h3>
            <div className="icon">
                {icon}
            </div>
            <p className="isSelectedText">(Текущая)</p>
        </div>
    )
}