import React from 'react';
import styles from './Download.module.css';

function Download() {
    // Function to handle PDF download
    const handleDownload = () => {
      // Create a link element
      const link = document.createElement('a');
      // Set the URL of the PDF file
      link.href = '/CATALOGO_CINTAMEX.pdf'; // Ensure the path is correct
      // Set the download attribute with a file name
      link.download = 'CATALOGO_CINTAMEX.pdf';
      // Append the link to the document
      document.body.appendChild(link);
      // Programmatically click the link to trigger the download
      link.click();
      // Remove the link from the document
      document.body.removeChild(link);
    };
  
    return (
      <>
      <div className={styles.download}>
      <h1>Catalogo</h1>
        <p>Descarga Nuestro catalogo en PDF</p>
        <div className={styles.button} onClick={handleDownload}>
      <div className={styles['button-wrapper']}>
        <div className={styles.text}>Descargar</div>
        <span className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            />
          </svg>
        </span>
      </div>
    </div>
      </div>
        
      </>
    );
  }
  
  export default Download;