import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);


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

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logonav}>
                <Link className={styles.navlink} to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul className={styles.navList}>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/" ? styles.active : ""
                    }`}
                    to="/"
                >
                    <li>Inicio</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/about" ? styles.active : ""
                    }`}
                    to="/about"
                >
                    <li>Nosotros</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/products" ? styles.active : ""
                    }`}
                    to="/products"
                >
                    <li>Productos</li>
                </Link>
                <Link
                    className={`${styles.navlink} ${
                        location.pathname === "/contact" ? styles.active : ""
                    }`}
                    to="/contact"
                >
                    <li>Contacto</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
