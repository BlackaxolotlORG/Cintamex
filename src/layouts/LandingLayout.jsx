import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./LandingLayout.module.css";
import Logo from "../assets/Logo.jpeg";

function LandingLayout() {
    return (
        <div>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to="/">
                    <img className={styles.logonav} src={Logo} alt="Logo" />
                </Link>
                <ul className={styles.navList}>
                    <Link className={styles.navlink} to="/">
                        <li>
                            <a>Inicio</a>
                        </li>
                    </Link>
                    <Link className={styles.navlink} to="/about">
                        <li>
                            <a>Nosotros</a>
                        </li>
                    </Link>
                    <Link className={styles.navlink} to="/products">
                        <li>
                            <a>Productos</a>
                        </li>
                    </Link>
                    <Link className={styles.navlink} to="/contact">
                        <li>
                            <a>Contacto</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <Outlet />

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerImage}>
                        <img src={Logo} alt="Footer Image" />
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Menú</h3>
                        <ul>
                            <Link className={styles.navlinkfoot} to="/">
                                <li>Inicio</li>
                            </Link>
                            <Link className={styles.navlinkfoot} to="/about">
                                <li>Nosotros</li>
                            </Link>
                            <Link className={styles.navlinkfoot} to="/products">
                                <li>Productos</li>
                            </Link>
                            <Link className={styles.navlinkfoot} to="/contact">
                                <li>Contacto</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Contacto</h3>
                        <p>
                            Correo:{" "}
                            <a href="mailto:dania.montesdeoca@vpcapital.mx">
                                EDUARDOREZNIK@CINTAMEX.COM.MX
                            </a>
                        </p>
                        <p>
                            Teléfono:{" "}
                            <a href="tel:+525543903252">(+52) 55 8556 7960</a>
                        </p>
                        <div className={styles.socialMedia}>
                            <a
                                href="https://www.linkedin.com/in/eduardo-reznik-0941a2170/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../../src/assets/Linkedin.png"
                                    alt="linkedin"
                                />
                            </a>

                            <a
                                href="https://wa.me/525585567950"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../../src/assets/Whatsapp.png"
                                    alt="Whatsapp"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/empaques.cintamex/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../../src/assets/Instagram.png"
                                    alt="Instagram"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Ubicación</h3>
                        <p>
                            Calle Los Remedios num.11 Col. San Luis Tlatilco
                            Naucalpan de Juarez 53630
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingLayout;
