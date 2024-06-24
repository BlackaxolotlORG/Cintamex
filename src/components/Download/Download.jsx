import { useRef, useEffect, useState } from "react";
import styles from "./Download.module.css";

function Download() {
    // Function to handle PDF download
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement("a");
        // Set the URL of the PDF file
        link.href = "/CATALOGO_CINTAMEX.pdf"; // Ensure the path is correct
        // Set the download attribute with a file name
        link.download = "CATALOGO_CINTAMEX.pdf";
        // Append the link to the document
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Remove the link from the document
        document.body.removeChild(link);
    };

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(elementRef.current); // Deja de observar una vez que es visible
                }
            },
            {
                threshold: 0.1,
                root: null, // `null` significa que se utiliza el viewport del navegador como root
                rootMargin: "0px 0px -150px 0px",
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className={styles.download}>
                <div 
                    className={`${styles.content} ${isVisible ? styles.animate : ""}`} 
                    ref={elementRef}
                >
                    <h2>Catálogo</h2>
                    <p>Descarga nuestro catálogo en PDF</p>
                    <div className={styles.button} onClick={handleDownload}>
                        <div className={styles["button-wrapper"]}>
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
            </div>
        </>
    );
}

export default Download;
