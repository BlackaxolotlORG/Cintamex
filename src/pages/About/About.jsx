import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.background}>
            <div className={styles["square-left-global"]}></div>
            <div className={styles["square-right-global"]}></div>
            <h1 className={styles.heading}>Sobre Nosotros</h1>
            <div className={styles.mainparagraph}>
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
                        <div
                            className={`${styles.photo} ${styles["image-1"]}`}
                        >
                            <picture>
                                <source srcset="/img/7.avif" type="image/avif" />
                                <source srcset="/img/7.webp" type="image/webp" />
                                <img src="/img/7.png" alt="Cinta Cintamex" loading="lazy" width="200" height="300" />
                            </picture>
                        </div>
                        <div
                            className={`${styles.infobox} ${styles.mission}`}
                        >
                            <h2>Nuestra Misión</h2>
                            <p>
                                Proveer soluciones integrales de empaque a
                                través de productos de alta calidad y un
                                servicio al cliente excepcional, asegurando la
                                máxima satisfacción y fomentando relaciones
                                duraderas con nuestros clientes. Nos
                                comprometemos a ofrecer precios competitivos y a
                                mantener un compromiso serio y profesional en
                                todas nuestras operaciones, reforzando así
                                nuestra posición como líderes en el mercado
                                mexicano.
                            </p>
                        </div>
                        <div
                            className={`${styles.photo} ${styles["image-2"]}`}
                        >
                            <picture>
                                <source srcset="/img/4.avif" type="image/avif" />
                                <source srcset="/img/4.webp" type="image/webp" />
                                <img src="/img/4.png" alt="Cinta Ejemplo" loading="lazy" width="200" height="300" />
                            </picture>
                        </div>
                        <div
                            className={`${styles.infobox} ${styles.vision}`}
                        >
                            <h2>Nuestra Visión</h2>
                            <p>
                                Ser reconocidos como el líder indiscutible en la
                                distribución de productos de empaque en México,
                                expandiendo nuestra presencia a mercados
                                internacionales y estableciendo estándares de
                                excelencia en servicio al cliente. Aspiramos a
                                ser pioneros en la adopción de prácticas
                                sostenibles en nuestra industria, contribuyendo
                                activamente a la economía circular y al
                                bienestar de nuestras comunidades.
                            </p>
                        </div>
                        <div
                            className={`${styles.photo} ${styles["image-3"]}`}
                        >
                            <picture>
                                <source srcset="/img/6.avif" type="image/avif" />
                                <source srcset="/img/6.webp" type="image/webp" />
                                <img src="/img/6.png" alt="Cinta Ejemplo" loading="lazy" width="200" height="300" />
                            </picture>
                        </div>
                        <div
                            className={`${styles.infobox} ${styles.values}`}
                        >
                            <h2>Nuestros Valores</h2>
                            <p>
                                Nos comprometemos a ofrecer productos de empaque
                                de alta calidad y un servicio al cliente
                                excepcional. Fomentamos relaciones duraderas,
                                mantenemos precios competitivos y actuamos con
                                profesionalismo e integridad. Aspiramos a ser
                                líderes en el mercado mexicano, promoviendo
                                prácticas sostenibles e innovaciones continuas
                                para beneficio de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.paragraph}>
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
