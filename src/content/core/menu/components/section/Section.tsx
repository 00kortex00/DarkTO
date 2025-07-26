import type { FC, ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    title?: string;
    children?: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
    return (
        <section className='darkto-section'>
            <h2>{title}</h2>
            {children}
        </section>
    )
}