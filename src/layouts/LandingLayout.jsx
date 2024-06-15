import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./LandingLayout.module.css";
import Logo from "../assets/Logo.jpeg";



import Footer from "../components/Footer/Footer";

function LandingLayout() {
    return (
        <div>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to="/">
                    <img className={styles.logonav} src={Logo} alt="Logo" />
                </Link>
                <ul className={styles.navList}>
                    <Link className={styles.navlink} to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link className={styles.navlink} to="/about">
                        <li>Nosotros</li>
                    </Link>
                    <Link className={styles.navlink} to="/products">
                        <li>Productos</li>
                    </Link>
                    <Link className={styles.navlink} to="/contact">
                        <li>Contacto</li>
                    </Link>
                </ul>
            </div>
            <Outlet />

            <Footer />
        </div>
    );
}

export default LandingLayout;
