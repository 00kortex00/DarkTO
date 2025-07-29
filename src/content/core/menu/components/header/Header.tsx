import { DarktoLogo } from '@icons';
import './Header.css';
import { useMenuStore } from '@src/content/core/store/menuStore';
import { usePagesStore } from '../../pages/pagesStore';

export const Header = () => {
    const { currentPage, setCurrentPage } = useMenuStore();
    const { pages } = usePagesStore();

    return (
        <header>
            <div className="brand">
                <DarktoLogo />
                DarkTO
            </div>
            <nav>
                <ul>
                    {pages.map(([title], index) => (
                        <li key={`page-${title}`}
                            className={`${(index === currentPage)?'current':''}`}
                            onClick={() => setCurrentPage(index)}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}