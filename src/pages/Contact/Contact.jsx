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
        {/* <h3>alle Los Remedios num.11 Col. San Luis Tlatilco Naucalpan de Juarez 53630</h3>*/}
        </div>

        <div className={styles.columns1}>
        <img src="../../src/assets/Telefono.png" alt="Telefono" />
        <h2>Telefono</h2>
        {/*<h3> + 52 5585567960</h3> */} 
        </div>

        <div className={styles.columns1}>
        <img src="../../src/assets/Mail.png" alt="Mail" />
        <h2>Mail</h2>
        {/*<h3>EDUARDOREZNIK@CINTAMEX.COM.MX</h3> */} 
        </div>

        </div>

        <div className={styles.background}>
            <div>
            <h1>Mandanos Un Mensaje</h1>
            
            </div>
        
             <div>
                <form>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name"></input>
                    <label for="email">Mail:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="message">Mensaje:</label>
                    <textarea id="message" name="message"></textarea>

                    
                    <button>Enviar</button>

                    <div className={styles.socialMedia}>
                <a href="https://www.linkedin.com/in/eduardo-reznik-0941a2170/" target="_blank" rel="noopener noreferrer">
                <img src="../../src/assets/Linkedin.png" alt="Linkedin" />
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

    )
  }
  
  export default Contact;