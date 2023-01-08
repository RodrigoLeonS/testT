import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const FooterDash = () => {

    return (
        <footer className="footer">
            <nav className="nav">
                <div className="container">
                    <ul className="menu menu--footer">

                        <li>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav__icon"
                            >
                                <BsInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav__icon"
                            >
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav__icon"
                            >
                                <BsYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default FooterDash;