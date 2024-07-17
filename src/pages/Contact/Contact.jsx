import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Contact.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import FloatAlert from "../../components/FloatAlert/FloatAlert";

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleMap, setIsVisibleMap] = useState(false);
    const elementRef = useRef(null);
    const elementRefMap = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [visualAlert, setVisualAlert] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const setAlert = () => {
            if (searchParams.get("sent") === "true") {
                setVisualAlert('Mensaje enviado correctamente');
                setTimeout(() => {
                    setVisualAlert('');
                    setSearchParams({});
                }, 3000);
            }
        }
        return () => setAlert();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    entry.target === elementRef.current
                ) {
                    setIsVisible(true);
                    observer.unobserve(elementRef.current); // Deja de observar una vez que es visible
                }
                if (
                    entry.isIntersecting &&
                    entry.target === elementRefMap.current
                ) {
                    setIsVisibleMap(true);
                    observer.unobserve(elementRefMap.current); // Deja de observar una vez que es visible
                }
            },
            {
                threshold: 0.1,
                root: null, // `null` significa que se utiliza el viewport del navegador como root
                rootMargin: "0px 0px -150px 0px",
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        if (elementRefMap.current) {
            observer.observe(elementRefMap.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            if (elementRefMap.current) {
                observer.unobserve(elementRefMap.current);
            }
        };
    }, []);

    const formSending = (e) => {
        setLoading(true);
        document.body.style.cursor = 'wait';
    }

    return (
        <>
            {visualAlert !== '' && <FloatAlert message={visualAlert} type='succes' /> }
            <div className={styles.contactanos}>
                <h1 className={styles.contactus}>Contáctanos</h1>
                <div className={styles.columns}>
                    <div
                        className={`${styles.column} ${
                            isVisible ? styles.animate : ""
                        }`}
                        ref={elementRef}
                    >
                        <div className={styles.icon}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <a className={styles.contactbut }
                        href="https://maps.app.goo.gl/fhj1Unc4bfZC38316"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>Ubicacion</h2>
                        <p>
                            Calle Los Remedios num.11 Col. San Luis Tlatilco
                            Naucalpan de Juarez 53630
                        </p>
                        </a>
                    </div>

                    <div
                        className={`${styles.column} ${
                            isVisible ? styles.animate : ""
                        }`}
                        ref={elementRef}
                        
                    >
                        <div className={styles.icon}>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <a className={styles.contactbut } href="tel:+525543903252">
                        <h2>Teléfono</h2>
                        <p>+52 55 8556 7950</p>
                     </a>
                    </div>

                    <div
                        className={`${styles.column} ${styles.mail} ${
                            isVisible ? styles.animate : ""
                        }`}
                        ref={elementRef}
                    >
                        <div className={styles.icon}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <a  className={styles.contactbut } href="mailto:info@cintamex.com.mx">
                        <h2>Mail</h2>
                        <p>info@cintamex.com.mx</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <h2 className={styles.HeadContact}>Mándanos Un Mensaje</h2>
                <div className={styles.formcontent}>
                    <div
                        className={`${styles.map} ${
                            isVisibleMap ? styles.animate : ""
                        }`}
                        ref={elementRefMap}
                    >
                        <iframe
                            title="Mapa de la ubicación de Cintamex"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.801009485496!2d-99.24061732107111!3d19.464144434951194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203ad67af6b75%3A0xcef9d68c5c5cfd25!2sC.%20Los%20Remedios%2011%2C%20San%20Luis%20Tlatilco%2C%2053630%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1717714047977!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form 
                        className={`${styles.contactform} ${isVisibleMap ? styles.animate : ""}`} 
                        ref={elementRefMap}
                        action="https://formsubmit.co/info@cintamex.com.mx"
                        method="POST"
                        onSubmit={formSending}
                    >
                        <div className={styles.field}>
                            <label htmlFor="name">Tu Nombre:</label>
                            <input type="text" id="name" name="name"></input>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Tu Mail:</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message"></textarea>
                        </div>

                        <button 
                            className={`${styles["submit-btn"]} ${loading ? styles.loading : ''}`}
                            disabled={loading}
                            type='submit'
                        >Enviar</button>
                        
                        <input type="hidden" name="_next" value={`${import.meta.env.VITE_FORM_URL}?sent=true`} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="basic" />

                        <SocialMedia />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
