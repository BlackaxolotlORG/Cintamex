import { React } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import Download from "../../components/Download/Download";

import Product from "../Products/Product";

import { products } from "../../data/data";

function Home() {
  const newProducts = products.slice(0, 3);
    return (
        <div className={styles.homepage}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h1>Cintamex, pega al ritmo de México </h1>
                        <p>
                            Cintamex es una empresa 100 % mexicana que se especializa en
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
                      // <div className={styles.newproduct}>
                      //     <h3>Titulo</h3>
                      //     <img></img>
                      //     Hello
                      //     <button className={styles.view}>View</button>
                      // </div>
                  ))}
                </div>
            </div>
            <Download />
            <div>
                <h2>Nuestros Valores</h2>
            </div>
            <div className={styles.newCollection}>
                <h2>Nuestra Vision</h2>
                <p>
                    Ser reconocidos como el líder indiscutible en la
                    distribución de productos de empaque en México, expandiendo
                    nuestra presencia a mercados internacionales y estableciendo
                    estándares de excelencia en servicio al cliente. Aspiramos a
                    ser pioneros en la adopción de prácticas sostenibles en
                    nuestra industria, contribuyendo activamente a la economía
                    circular y al bienestar de nuestras comunidades.
                </p>
            </div>
        </div>
    );
}

export default Home;
