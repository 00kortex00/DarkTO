import { DarktoLogo } from '@icons';
import './Header.css';
import { pages } from '../../pages/pages';
import { useMenuStore } from '@src/content/core/store/menuStore';

export const Header = () => {
    const { currentPage, setCurrentPage } = useMenuStore();

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