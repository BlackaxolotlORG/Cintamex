import { useRef, useEffect, useState } from "react";
import styles from "../../pages/About/About.module.css";

const CardAbout = ({photo, styleClass, typeTextBox, text}) => {
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
    if(photo !== undefined){
        return (
            <div
                className={`${styles.photo} ${styles[styleClass]} ${isVisible ? styles.animate : ""}`} 
                ref={elementRef}
            >
                <picture>
                    <source srcSet={`${photo}.avif`} type="image/avif" />
                    <source srcSet={`${photo}.webp`} type="image/webp" />
                    <img src={`${photo}.png`} alt="Cinta Cintamex" loading="lazy" width="200" height="300" />
                </picture>
            </div>
        );
    }else{
        return (
            <div
                className={`${styles.infobox} ${styles[styleClass]} ${isVisible ? styles.animate : ""}`} 
                ref={elementRef}
            >
                <h2>{text.heading}</h2>
                <p>{text.text}</p>
            </div>
        )
    }
};

export default CardAbout;
