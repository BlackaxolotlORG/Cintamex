import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Landinglayout() {
    return (
      <div>
        <div >
              <ul >
              <Link to="/"><li><a>Inicio</a></li></Link>
              <Link to="/about"><li><a>about</a></li></Link>
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