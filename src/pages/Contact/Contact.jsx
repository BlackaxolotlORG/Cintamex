import styles from './contact.module.css'

function Contact() {
    return (
        <div className={styles.background}>
            <div>
            <h1>Contactanos</h1>
             <p> Hello world contact us </p>
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
             </div>
        </div>

    )
  }
  
  export default Contact
  