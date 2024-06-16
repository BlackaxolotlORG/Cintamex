import styles from "./Contact.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";

function Contact() {
    return (
        <>
            <div className={styles.contactanos}>
                <h1 className={styles.contactus}>Contáctanos</h1>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.icon}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h2>Ubicacion</h2>
                        <p>
                            Calle Los Remedios num.11 Col. San Luis Tlatilco
                            Naucalpan de Juarez 53630
                        </p>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.icon}>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <h2>Telefono</h2>
                        <p>+52 55 8556 7960</p>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.icon}>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <h2>Mail</h2>
                        <p>eduardoreznik@cintamex.com.mx</p>
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <h2 className={styles.HeadContact}>Mandanos Un Mensaje</h2>
                <div className={styles.formcontent}>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.801009485496!2d-99.24061732107111!3d19.464144434951194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203ad67af6b75%3A0xcef9d68c5c5cfd25!2sC.%20Los%20Remedios%2011%2C%20San%20Luis%20Tlatilco%2C%2053630%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1717714047977!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                      <form className={styles.contactform}>
                          <div className={styles.field}>
                            <label htmlFor="name">Tu Nombre:</label>
                            <input type="text" id="name" name="name"></input>
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="email">Tu Mail:</label>
                            <input type="text" id="email" name="email"></input>
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message"></textarea>
                          </div>

                          <button className={styles["submit-btn"]}>Enviar</button>

                          <SocialMedia />
                      </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
