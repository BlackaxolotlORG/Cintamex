import styles from './contact.module.css'

function Contact() {

    return (
        <div className={styles.background}>
            <div>
            <h1>Contactanos</h1>
             <p> Telefono: +52 55 8556 7950 </p>
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
                </form>


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
             </div>
        </div>

    )
  }
  
  export default Contact;