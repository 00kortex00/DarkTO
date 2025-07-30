import type { FC, ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    children?: ReactNode;
}

export const Section: FC<SectionProps> = ({ children }) => {
    return (
        <section className='darkto-section'>
            {children}
        </section>
    )
}