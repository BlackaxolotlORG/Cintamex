// src/pages/Products/Products.js
import React from "react";
import Download from "../../components/Download/Download";
import Product from "./Product";
import styles from "./Products.module.css";

const products = [
    {
        image: "../../src/assets/Transparente_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Transparente_3.png",
        description: '72mm / 3" de ancho, caja contiene 24pz.',
    },
    {
        image: "../../src/assets/Canela_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Canela_3.png",
        description: '72mm / 3" de ancho, caja contiene 24pz.',
    },
    {
        image: "../../src/assets/Hot_melt_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Hot_melt_3.png",
        description: '72mm / 3" de ancho, caja contiene 24pz.',
    },
    {
        image: "../../src/assets/Blanco_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Azul_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Rojo_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Morado_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Naranja_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Amarillo_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Verde_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Negro_2.png",
        description: '48mm / 2" de ancho, caja contiene 36pz.',
    },
    {
        image: "../../src/assets/Playo_5.png",
        description: "Calibre 80, pesos de 700grs , 1Kg.",
    },
    {
        image: "../../src/assets/Playo_18.png",
        description:
            "Calibre 80, pesos de 2.6 Kg, 2.8 Kg, 3.0 Kg, 3.2 Kg, 3.4 Kg.",
    },
    {
        image: "../../src/assets/Playo_20.png",
        description: "Calibre 80, peso de 3.0Kg",
    },
    {
        image: "../../src/assets/Personalizado.png",
        description:
            "Cinta personalizada en trasparente canela o cualquiero fondo color",
    },

    // Añade más productos aquí
];

const Products = () => {
    return (
        <>
            <div className={styles["products-page"]}>
                <h1 className={styles.heading}>Productos</h1>
                <div className={styles.products}>
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
            <Download />
        </>
    );
};

export default Products;
