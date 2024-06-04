// src/components/Product/Product.js
import React from 'react';
import styles from './Products.module.css';

const Product = ({ image, description }) => {
    return (
        <div className={styles.product}>
            <img src={image} alt="Product" />
            <p>{description}</p>
            <button>Buy</button>
        </div>
    );
}

export default Product;
