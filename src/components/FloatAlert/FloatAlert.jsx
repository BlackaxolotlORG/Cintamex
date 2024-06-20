
import styles from "./FloatAlert.module.css";

const FloatAlert = ({message, type}) => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.alert} ${type === 'error' ? styles.error : styles.success}`}>
                <i className={`fa-solid fa-${type === 'error' ? 'circle-xmark' : 'check-circle'}`}></i>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default FloatAlert
