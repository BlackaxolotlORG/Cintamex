import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [showMenu, setShowMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            if (currentScroll > lastScroll) {
                setScrolled(true);
            } else if (currentScroll < lastScroll){
                setScrolled(false);
            }
            setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }
    , [lastScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setShowMenu(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    } 

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${showMenu ? styles["menu-active"] : ''}`}>
            <div className={styles.logonav}>
                <div className={styles.logo}>
                    <Link className={styles.navlink} to="/" onClick={scrollToTop}>
                        <picture>
                            <source srcSet="/img/Logo_sin_fondo.avif" type="image/avif" />
                            <source srcSet="/img/Logo_sin_fondo.webp" type="image/webp" />
                            <img src="/img/Logo_sin_fondo.png" alt="Logo Cintamex" loading="lazy" width="200" height="300" />
                        </picture>
                    </Link>
                </div>
                <div className={styles.menu} onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <ul className={`${styles.navList}`}>
                <li>
                    <Link
                        className={`${styles.navlink} ${
                            location.pathname === "/" ? styles.active : ""
                        }`}
                        to="/"
                        onClick={scrollToTop}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.navlink} ${
                            location.pathname === "/about" ? styles.active : ""
                        }`}
                        to="/about"
                        onClick={scrollToTop}
                    >
                        Nosotros
                    </Link> 
                </li>
                <li>
                    <Link
                        className={`${styles.navlink} ${
                            location.pathname === "/products" ? styles.active : ""
                        }`}
                        to="/products"
                        onClick={scrollToTop}
                    >
                    Productos
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.navlink} ${
                            location.pathname === "/contact" ? styles.active : ""
                        }`}
                        to="/contact"
                        onClick={scrollToTop}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
