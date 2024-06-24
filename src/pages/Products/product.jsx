import { useEffect, useState, useRef } from "react";
import styles from "./Products.module.css";

const Product = ({ product }) => {
    const {
        image,
        name,
        description,
        weight,
        thickness,
        width,
        type,
        pieces,
        short,
    } = product;

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(elementRef.current); // Deja de observar una vez que es visible
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

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${styles.product} ${isVisible ? styles.animate : ""}`}
        >
            <div className={styles.image}>
                <picture>
                    <source srcSet={`/img/${image}.avif`} type="image/avif" />
                    <source srcSet={`/img/${image}.webp`} type="image/webp" />
                    <img src={`/img/${image}.png`} alt={`Product ${name}`} loading="lazy" width="200" height="300" />
                </picture>
            </div>
            <div className={styles.description}>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    {description && (
                        <p className={styles["description-p"]}>
                            <span>{description}</span>
                        </p>
                    )}
                    {pieces && (
                        <p>
                            Piezas: <span>{pieces}</span>
                        </p>
                    )}
                    {thickness && (
                        <p>
                            Grosor: <span>{thickness}</span>
                        </p>
                    )}
                    {width && (
                        <p>
                            Ancho: <span>{width}</span>
                        </p>
                    )}
                    {weight && (
                        <p>
                            Peso: <span>{weight}</span>
                        </p>
                    )}
                </div>
                <div className={styles["info-left"]}>
                    {type && (
                        <p>
                            <span>{type}</span>
                        </p>
                    )}
                    {short && (
                        <p>
                            <span>{short}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
