import Download from '../../components/Download/Download';
import styles from './Products.module.css';
function Products() {
    return (
        <>
             <h1>Products</h1>
             <p> Hello world here are our products </p>
            
             <div className={styles.products}>
             <div className={styles.product}>
                Product one
                <p>
                    Product description
                </p>
                <button>Buy</button>
             </div>
             <div className={styles.product}>
                Product two
                <p>
                    Product description
                </p>
                <button>Buy</button>
             </div>
             <div className={styles.product}>
                Product three
                <p>
                    Product description
                </p>
                <button>Buy</button>
             
             </div>
             <div className={styles.product}>
                Product four
                <p>
                    Product description
                </p>
                <button>Buy</button>
            
             </div>
             <div className={styles.product}>
                Product one
                <p>
                    Product description
                </p>
                <button>Buy</button>
             </div>
             <div className={styles.product}>
                Product two
                <p>
                    Product description
                </p>
                <button>Buy</button>
             </div>
             <div className={styles.product}>
                Product three
                <p>
                    Product description
                </p>
                <button>Buy</button>
             
             </div>
             <div className={styles.product}>
                Product four
                <p>
                    Product description
                </p>
                <button>Buy</button>
            
             </div>
             </div>
             <Download />

         
        </>

    )
  }
  
  export default Products
  