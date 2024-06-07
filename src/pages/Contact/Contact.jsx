import styles from './contact.module.css'

function Contact() {

    return (
        <div className={styles.contactanos}>
           
        <div className={styles.contactus}>
        <h1>Contactanos</h1>
        </div>

        <div className={styles.columns}>

       

        <div className={styles.columns1}>
        <img src="../../src/assets/Ubi.png" alt="Ubicacion" />
        <h2>Ubicacion</h2>
        <h3>Calle Los Remedios num.11 Col. San Luis Tlatilco Naucalpan de Juarez 53630</h3>
        </div>

        <div className={styles.columns1}>
        <img src="../../src/assets/Telefono.png" alt="Telefono" />
        <h2>Telefono</h2>
        <h3> + 52 5585567960</h3>
        </div>

        <div className={styles.columns1}>
        <img src="../../src/assets/Mail.png" alt="Mail" />
        <h2>Mail</h2>
        <h3>EDUARDOREZNIK@CINTAMEX.COM.MX</h3>
        </div>

        </div>

        <div className={styles.background}>
            <div>
            
            </div>
            <div className={styles.HeadContact}>
            <h1>Mandanos Un Mensaje</h1>
            
            </div>
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
             <div className={styles.contactform}>
                <form>
                    <label for="name">Tu Nombre:</label>
                    <input type="text" id="name" name="name"></input>
                    <label for="email">Tu Mail:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="message">Mensaje:</label>
                    <textarea id="message" name="message"></textarea>

                    
                    <button>Enviar</button>

                    <div className={styles.socialMedia}>
                <a href="https://www.linkedin.com/in/eduardo-reznik-0941a2170/" target="_blank" rel="noopener noreferrer">
                <img src="../../src/assets/Linkedin.png" alt="linkedin" />
                </a>

                <a href="https://wa.me/525585567950" target="_blank" rel="noopener noreferrer">
                <img src="../../src/assets/Whatsapp.png" alt="Whatsapp" />
                </a>

                <a href="https://www.instagram.com/empaques.cintamex/" target="_blank" rel="noopener noreferrer">
                <img src="../../src/assets/Instagram.png" alt="Instagram" />
                </a>

                </div>
                </form>


               
             </div>
            </div>
            
        </div>
        </div>

    )
  }
  
  export default Contact;