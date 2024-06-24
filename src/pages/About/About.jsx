import { useRef, useEffect, useState } from "react";
import CardAbout from "../../components/CardAbout/CardAbout";
import styles from "./About.module.css";


function About() {
    const [isVisibleMain, setIsVisibleMain] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const elementRefMain = useRef(null);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.target === elementRefMain.current) {
                    setIsVisibleMain(true);
                    observer.unobserve(elementRefMain.current); // Deja de observar una vez que es visible
                }
                if (entry.isIntersecting && entry.target === elementRef.current) {
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

        if (elementRefMain.current) {
            observer.observe(elementRefMain.current);
        }

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRefMain.current) {
                observer.unobserve(elementRefMain.current);
            }
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles["square-left-global"]}></div>
            <div className={styles["square-right-global"]}></div>
            <h1 className={styles.heading}>Sobre Nosotros</h1>
            <div 
                className={`${styles.mainparagraph} ${isVisibleMain ? styles.animate : ""}`} 
                ref={elementRefMain}
            >
                <p>
                    Cintamex es una empresa 100% mexicana que se especializa en
                    la distribución de productos de empaque. Su principal
                    fortaleza es el servicio al cliente, ofreciendo productos de
                    calidad certificada al mejor precio del mercado y
                    manteniendo siempre seriedad en sus tratos y operaciones.
                </p>
            </div>
            <div className={styles.squares}>
                <div className={styles.container}>
                    <div className={styles["square-left"]}></div>
                    <div className={styles["square-right"]}></div>
                    <div className={styles.infogrid}>
                        <CardAbout
                            photo="/img/7"
                            styleClass="image-1"
                        />
                        <CardAbout
                            styleClass="mission"
                            text={{
                                heading: "Nuestra Misión",
                                text: "Proveer soluciones integrales de empaque a través de productos de alta calidad y un servicio al cliente excepcional, asegurando la máxima satisfacción y fomentando relaciones duraderas con nuestros clientes. Nos comprometemos a ofrecer precios competitivos y a mantener un compromiso serio y profesional en todas nuestras operaciones, reforzando así nuestra posición como líderes en el mercado mexicano."
                            }}
                        />
                        <CardAbout
                            photo="/img/4"
                            styleClass="image-2"
                        />
                        <CardAbout
                            styleClass="vision"
                            text={{
                                heading: "Nuestra Visión",
                                text: "Ser reconocidos como el líder indiscutible en la distribución de productos de empaque en México, expandiendo nuestra presencia a mercados internacionales y estableciendo estándares de excelencia en servicio al cliente. Aspiramos a ser pioneros en la adopción de prácticas sostenibles en nuestra industria, contribuyendo activamente a la economía circular y al bienestar de nuestras comunidades."
                            }}
                        />
                        <CardAbout
                            photo="/img/6"
                            styleClass="image-3"
                        />
                        <CardAbout
                            styleClass="values"
                            text={{
                                heading: "Nuestros Valores",
                                text: "Nos comprometemos a ofrecer productos de empaque de alta calidad y un servicio al cliente excepcional. Fomentamos relaciones duraderas, mantenemos precios competitivos y actuamos con profesionalismo e integridad. Aspiramos a ser líderes en el mercado mexicano, promoviendo prácticas sostenibles e innovaciones continuas para beneficio de nuestros clientes."
                            }}
                        />
                    </div>
                </div>
            </div>
            <div 
                className={`${styles.paragraph} ${isVisible ? styles.animate : ""}`} 
                ref={elementRef}
            >
                <p>
                    Cintamex se compromete a mantener los más altos estándares
                    de calidad en todos nuestros productos de empaque. Nos
                    dedicamos a mejorar continuamente nuestros procesos para
                    asegurar la eficacia operativa y la satisfacción total de
                    nuestros clientes. Cumplimos con todas las normativas
                    aplicables y nos esforzamos por superar las expectativas del
                    mercado a través de innovación constante y un servicio al
                    cliente sin igual. Nuestro objetivo es garantizar la entrega
                    de productos confiables y de calidad certificada, siempre al
                    mejor precio, fortaleciendo así la confianza y la lealtad de
                    nuestros clientes.
                </p>
            </div>
        </div>
    );
}

export default About;
