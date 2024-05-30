import React from 'react';
import styles from './Home.module.css';
import Download from '../../components/Download/Download';

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Cintamex, pega al ritmo de México </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros eget tincidunt ultrices.</p>
        <button className={styles.shopNowBtn}>Ver Productos</button>
      </div>
      <div className={styles.newCollection}>
        <h2>Nuevos Productos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros eget tincidunt ultrices.</p>
        
      </div>
      <Download />
    </div>
  );
}

export default Home;