import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-content"]}>
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
        </div>
    );
};

export default Footer;
