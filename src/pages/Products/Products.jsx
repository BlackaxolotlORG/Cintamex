// src/pages/Products/Products.js
import React from 'react';
import Download from '../../components/Download/Download';
import Product from './product.jsx';
import styles from './Products.module.css';

const products = [
    { image: '../../src/assets/7.png', description: 'Product 1 description' },
    { image: '../../src/assets/7.png', description: 'Product 2 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    { image: '../../src/assets/7.png', description: 'Product 3 description' },
    

    // Añade más productos aquí
];

const Products = () => {
    return (
        <>
            <h1>Productos</h1>
            <p>Hello world here are our products</p>
            <div className={styles.products}>
                {products.map((product, index) => (
                    <Product 
                        key={index} 
                        image={product.image} 
                        description={product.description} 
                    />
                ))}
            </div>
            <Download />
        </>
    );
}

export default Products;
