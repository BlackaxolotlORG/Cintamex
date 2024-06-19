import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";

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
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.menu} onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <ul className={`${styles.navList}`}>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/" ? styles.active : ""
                    }`}
                    to="/"
                    onClick={scrollToTop}
                >
                    <li>Inicio</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/about" ? styles.active : ""
                    }`}
                    to="/about"
                    onClick={scrollToTop}
                >
                    <li>Nosotros</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/products" ? styles.active : ""
                    }`}
                    to="/products"
                    onClick={scrollToTop}
                >
                    <li>Productos</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/contact" ? styles.active : ""
                    }`}
                    to="/contact"
                    onClick={scrollToTop}
                >
                    <li>Contacto</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
