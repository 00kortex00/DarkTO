import { useMenuStore } from '../store/menuStore';
import { Header } from './components/header/Header';
import './Menu.css';
import { pages } from './pages/pages';

export const Menu = () => {
    const { currentPage } = useMenuStore();
    const pageContent = pages[currentPage][1];

    return (
        <div className="darkto-menu">
            <Header />
            <main>
                {pageContent}
            </main>
        </div>
    )
}