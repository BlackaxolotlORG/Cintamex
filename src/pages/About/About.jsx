import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <h1>Sobre Nosotros</h1>
            <p className={styles.mainparagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. Praesent libero. Sed cursus ante dapibus 
                diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
                augue semper porta. Mauris massa. Vestibulum lacinia arcu 
                eget nulla. Class aptent taciti sociosqu ad litora torquent 
                per conubia nostra, per inceptos himenaeos.
            </p>
            <div className={styles.infogrid}>
                <div className={styles.infobox}>
                    <h2>Nuestra missión</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus 
                        diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                </div>
                <div className={styles.photo}>
                    <img src="../assets/1.jpg" alt="Placeholder" />
                </div>
                <div className={styles.photo}>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
                </div>
                <div className={styles.infobox}>
                    <h2>Nuestra visión</h2>
                    <p>
                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
                        augue semper porta. Mauris massa. Vestibulum lacinia arcu 
                        eget nulla. Class aptent taciti sociosqu ad litora torquent 
                        per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h2>Nuestros valores</h2>
                    <p>
                        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
                        Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque 
                        sem at dolor. Maecenas mattis.
                    </p>
                </div>
                <div className={styles.photo}>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
                </div>
            </div>
        </div>
    );
}

export default About;
