import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
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
                    <img src={Logo} alt="Footer Image" />
                </div>
                <div className={styles.footerSection}>
                    <h3>Menú</h3>
                    <ul>
                        <Link className={styles.navlinkfoot} to="/" onClick={scrollToTop}>
                            <li>Inicio</li>
                        </Link>
                        <Link className={styles.navlinkfoot} to="/about" onClick={scrollToTop}>
                            <li>Nosotros</li>
                        </Link>
                        <Link className={styles.navlinkfoot} to="/products" onClick={scrollToTop}>
                            <li>Productos</li>
                        </Link>
                        <Link className={styles.navlinkfoot} to="/contact" onClick={scrollToTop}>
                            <li>Contacto</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contacto</h3>
                    <p>
                        Correo:{" "}
                        <a href="mailto:">
                            eduardoreznik@cintamex.com.mx
                        </a>
                    </p>
                    <p>
                        Teléfono:{" "}
                        <a href="tel:+525543903252">(+52) 55 8556 7960</a>
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
