import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '@/constants/menu.ts';

export const Header = () => (
  <header>
    <nav className="nav">
      {MENU_ITEMS.map((menu) => (
        <div key={menu.id} className="nav-menu">
          {/* HINT: .nav-menu CSS 속성을 참고해도 됩니다. */}
          <a href={menu.link}>{menu.label}</a>
          {menu.subMenu && (
            <ul className="sub-menu">
              {menu.subMenu.map((subMenu) => (
                <Link to={subMenu.link} key={subMenu.id}>
                  {subMenu.label}
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  </header>
);

export default Header;
