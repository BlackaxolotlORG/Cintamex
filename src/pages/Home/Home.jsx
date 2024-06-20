import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import Download from "../../components/Download/Download";

import Product from "../Products/Product";
import Image from "../../components/ImageGallery/Image";

import { products, galery } from "../../data/data";

function Home() {
    const newProducts = products.slice(0, 3);

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
        <div className={styles.homepage}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <div 
                        className={`${styles.text} ${isVisible ? styles.animate : ""}`} 
                        ref={elementRef}
                    >
                        <h1>Cintamex</h1>
                        <h2>¡Pega al ritmo de México!</h2>
                        <p>
                            Cintamex es una empresa 100% mexicana que se especializa en
                            la distribución de productos de empaque. Su principal
                            fortaleza es el servicio al cliente, ofreciendo productos de
                            calidad certificada al mejor precio del mercado y
                            manteniendo siempre seriedad en sus tratos y operaciones.
                        </p>
                        <Link 
                            to="/products"
                            className={styles.shopNowBtn}
                        >
                            Ver Productos
                        </Link>
                    </div>
                </div>
            </header>
            <div className={styles.newCollection}>
                <h2>Nuevos Productos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ullamcorper eros eget tincidunt ultrices.
                </p>
                <div className={styles.newproducts}>
                  {newProducts.map((product, i) => (
                      <Product key={i} product={product} />
                  ))}
                </div>
            </div>
            <Download />
            <div className={styles.images}>
                  {galery.map((image, i) => (
                      <Image key={i} image={image} />
                  ))}
            </div>
        </div>
    );
}

export default Home;
