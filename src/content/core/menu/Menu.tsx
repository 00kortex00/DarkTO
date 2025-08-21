import { useEffect } from 'react';
import { useMenuStore } from '../store/menuStore';
import { Header } from './components/header/Header';
import './Menu.css';
import { usePagesStore } from './pages/pagesStore';

export const Menu = () => {
    const { currentPage } = useMenuStore();
    const { pages } = usePagesStore();

    useEffect(() => {
        function unlockCursor() {
            document.exitPointerLock()
        }
        unlockCursor();
        
        document.addEventListener('pointerlockchange', unlockCursor);
        
        return () => document.removeEventListener('pointerlockchange', unlockCursor);
    }, []);

    return (
        <div className="darkto-menu">
            <Header />
            <main>
                {pages[currentPage][1]()}
            </main>
        </div>
    )
}