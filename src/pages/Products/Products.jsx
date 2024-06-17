// src/pages/Products/Products.js
import React from "react";
import Download from "../../components/Download/Download";
import Product from "./Product";
import styles from "./Products.module.css";
import { products } from "../../data/data";


const Products = () => {
    return (
        <>
            <div className={styles["products-page"]}>
                <h1 className={styles.heading}>Productos</h1>
                <div className={styles.products}>
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </div>
            <Download />
        </>
    );
};

export default Products;
