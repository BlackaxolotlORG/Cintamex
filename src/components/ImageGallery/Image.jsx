import { useEffect, useState, useRef } from "react";

import styles from "./Image.module.css";

const Image = ({image}) => {
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
                rootMargin: "0px 0px -250px 0px",
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
            className={`${styles.image} ${isVisible ? styles.animate : ""}`}
        >
            <picture>
                <source srcset={`/img/${image.image}.avif`} type="image/avif" />
                <source srcset={`/img/${image.image}.webp`} type="image/webp" />
                <img src={`/img/${image.image}.png`} alt={image.alt} loading="lazy" width="200" height="300" />
            </picture>
        </div>
    )
}

export default Image
