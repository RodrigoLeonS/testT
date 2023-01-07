import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logocrediweb from '../../assets/img/logo-crediweb.png';

function HeaderNavBarHome() {
    const header = useRef();
    const nav = useRef();

    const documentScroll = () => {
        header.current?.classList.toggle('header--scroll', window.scrollY > 0);
        nav.current?.classList.toggle('nav--scroll', window.scrollY > 0);
    };

    document.addEventListener('scroll', documentScroll);
    return (
        <header
            className="header"
            ref={header}
        >
            <nav
                className="nav"
                ref={nav}
            >
                <div className="container elements elements--header-nav">
                    <Link to="/">
                        <img src={logocrediweb} alt="Logo CrediWeb" width="64" height="64" className="nav__logo" />
                    </Link>
                    <ul className="menu">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Nosotros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Reservas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderNavBarHome;