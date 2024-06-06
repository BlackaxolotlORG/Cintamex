import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from './LandingLayout.module.css';
import Logo from '../assets/Logo.jpeg'
function Landinglayout() {
    return (
      <div>
        <div className={styles.navbar}>
        <Link className={styles.navlink} to="/"> <img className={styles.logonav} src={Logo}></img></Link>
              <ul >
             
              <Link className={styles.navlink} to="/"><li><a>Inicio</a></li></Link>

              <Link className={styles.navlink} to="/about"><li><a>Nosotros</a></li></Link>
              <Link className={styles.navlink} to="/products"><li><a>Productos</a></li></Link>
              <Link className={styles.navlink} to="/contact"><li><a>Contacto</a></li></Link>

  </ul>
              </div>
        <Outlet /> {/* This will render child routes here */}
       <div className={styles.footer}>
       <Link className={styles.navlink} to="/" onClick={() => window.scrollTo(0, 0)}> <img className={styles.logonav} src={Logo}></img></Link>
          Hello this is a footer
        </div> 

      </div>
    );
}

export default Landinglayout;