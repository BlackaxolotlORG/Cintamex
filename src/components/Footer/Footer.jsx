import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={styles.footer}>
            <div className={styles["footer-content"]}>
                <div className={styles.footerImage}>
                        <picture>
                            <source srcSet="/img/Logo.avif" type="image/avif" />
                            <source srcSet="/img/Logo.webp" type="image/webp" />
                            <img src="/img/Logo.png" alt="Logo Cintamex" loading="lazy" width="200" height="300" />
                        </picture>
                </div>
                <div className={styles.footerSection}>
                    <h3>Menú</h3>
                    <ul>
                        <li>
                            <Link className={styles.navlinkfoot} to="/" onClick={scrollToTop}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navlinkfoot} to="/about" onClick={scrollToTop}>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navlinkfoot} to="/products" onClick={scrollToTop}>
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navlinkfoot} to="/contact" onClick={scrollToTop}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contacto</h3>
                    <p>
                        Correo:{" "}
                        <a href="mailto:">
                            info@cintamex.com.mx
                        </a>
                    </p>
                    <p>
                        Teléfono:{" "}
                        <a href="tel:+525543903252">(+52) 55 8556 7950</a>
                    </p>
                    <SocialMedia 
                        footer={true}
                    />
                </div>
                <div className={styles.footerSection}>
                    <h3>Ubicación</h3>
                    <a
                        href="https://maps.app.goo.gl/fhj1Unc4bfZC38316"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Calle Los Remedios num.11 Col. San Luis Tlatilco
                        Naucalpan de Juarez 53630
                    </a>
                </div>
            </div>
            <p className={styles.rights}>Todos los derechos reservados. Cintamex&#169;</p>
        </div>
    );
};

export default Footer;
