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
        <button onClick={handleDownload}>Descargar</button>
      </div>
        
      </>
    );
  }
  
  export default Download;