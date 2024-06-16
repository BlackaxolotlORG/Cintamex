import styles from './Products.module.css';

const Product = ({ product }) => {
    const { image, name, description, weight, thickness, width, type, pieces } = product;

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={image} alt="Product" />
            </div>
            <div className={styles.description}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    {description && <p className={styles["description-p"]}><span>{description}</span></p>}
                    {pieces && <p>Piezas: <span>{pieces}</span></p>}
                    {thickness && <p>Grosor: <span>{thickness}</span></p>}
                    {width && <p>Ancho: <span>{width}</span></p>}
                    {type && <p><span>{type}</span></p>}
                    {weight && <p>Peso: <span>{weight}</span></p>}
                    
                </div>
                {/* <div className={styles.view}>
                    <button>
                        Ver más
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Product;
