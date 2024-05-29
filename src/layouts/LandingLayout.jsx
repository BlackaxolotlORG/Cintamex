import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from './LandingLayout.module.css';

function Landinglayout() {
    return (
      <div>
        <div className={styles.navbar}>
              <ul >
              <Link to="/"><li><a>Inicio</a></li></Link>
              <Link to="/about"><li><a>about</a></li></Link>
              <Link to="/contact"><li><a>Contact</a></li></Link>
              <Link to="/products"><li><a>Products</a></li></Link>
  </ul>
              </div>
        <Outlet /> {/* This will render child routes here */}
        {/* <div className={styles.footer}>
          Hello this is a footer
        </div> */}
      </div>
    );
}

export default Landinglayout;