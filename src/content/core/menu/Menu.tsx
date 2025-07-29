import { useMenuStore } from '../store/menuStore';
import { Header } from './components/header/Header';
import './Menu.css';
import { usePagesStore } from './pages/pagesStore';

export const Menu = () => {
    const { currentPage } = useMenuStore();
    const { pages } = usePagesStore();

    return (
        <div className="darkto-menu">
            <Header />
            <main>
                {pages[currentPage][1]()}
            </main>
        </div>
    )
}