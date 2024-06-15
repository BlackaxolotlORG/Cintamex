import styles from './Products.module.css';

const Product = ({ image, description }) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={image} alt="Product" />
            </div>
            <div className={styles.info}>
                <p>{description}</p>
                <button className={styles.view}>Detalles</button>
            </div>
        </div>
    );
}

export default Product;
