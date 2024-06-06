import {React} from 'react';
import {Link } from 'react-router-dom';

import styles from './Home.module.css';
import Download from '../../components/Download/Download';

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Cintamex, pega al ritmo de México </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros eget tincidunt ultrices.</p>
       <Link to ='/products'><button className={styles.shopNowBtn}>Ver Productos</button></Link> 
      </div>
      <div className={styles.newCollection}>
        <h2>Nuevos Productos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros eget tincidunt ultrices.</p>
        
      </div>
      <Download />
      <div className={styles.newCollection}>
        <h2>Quienes Somos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros eget tincidunt ultrices.</p>
        
      </div>
    </div>
  );
}

export default Home;