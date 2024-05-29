import styles from './contact.module.css'

function Contact() {
    return (
        <div className={styles.background}>
            <div>
            <h1>Contact</h1>
             <p> Hello world contact us </p>
            </div>
        
             <div>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"></input>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button>Send</button>
                </form>
             </div>
        </div>

    )
  }
  
  export default Contact
  