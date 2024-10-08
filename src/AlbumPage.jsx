import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #f06, #ff9)', // Vibrant gradient
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        background: 'blue', // Bright pink header
        color: '#fff',
        padding: '10px 10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        footerLinkHover: {
            color: '#fff', }
        
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '150px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Shadow effect for text
    },
    nav: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ff0', // Yellow on hover
    },
    content: {
        flex: 1,
        padding: '20px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
        width: '100%',
        maxWidth: '1200px',
    },
    galleryItem: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        objectFit: 'cover',
    },
    uploadForm: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color:"blue",
    },
    uploadLabel: {
        marginBottom: '10px',
        fontWeight: 'bold',
        color:"blue",
    },
    uploadInput: {
        marginBottom: '10px',
        color:"blue",
        
    },
    uploadButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: 'blue', // Button color
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background 0.3s ease',
    },
    footer: {
        background: 'blue',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
    },
    footerText: {
        margin: 0,
    },
    footerLink: {
        color: '#ff0',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const AlbumPage = () => {
    const [images, setImages] = useState([]);

    // Load images from localStorage on component mount
    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('images')) || [];
        setImages(storedImages);
    }, []);

    // Save images to localStorage whenever the images state changes
    useEffect(() => {
        localStorage.setItem('images', JSON.stringify(images));
    }, [images]);

    const handleImageUpload = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fileInput = formData.get('fileInput');

        if (fileInput) {
            const imageUrl = URL.createObjectURL(fileInput);
            setImages(prevImages => [...prevImages, imageUrl]);
        }
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <div style={styles.logoContainer}>
                    <img src="/logo.png" alt="Takenolab lot" style={styles.logo} />
                    <div style={styles.nameContainer}>TakenoLAB</div>
                </div>
                <nav>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}><Link to="/" style={styles.navLink} activeStyle={styles.navLinkHover}>Home</Link></li>
                        <li style={styles.navItem}><Link to="/about" style={styles.navLink} activeStyle={styles.navLinkHover}>About</Link></li>
                        <li style={styles.navItem}><Link to="/contact" style={styles.navLink} activeStyle={styles.navLinkHover}>Contact</Link></li>
                        <li style={styles.navItem}><Link to="/results" style={styles.navLink} activeStyle={styles.navLinkHover}>Results</Link></li>
                        <li style={styles.navItem}><Link to="/admin" style={styles.navLink} activeStyle={styles.navLinkHover}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>

            <section style={styles.content}>
                <form style={styles.uploadForm} onSubmit={handleImageUpload}>
                    <label htmlFor="fileInput" style={styles.uploadLabel}>Select an image:</label>
                    <input
                        type="file"
                        id="fileInput"
                        name="fileInput"
                        accept="image/*"
                        style={styles.uploadInput}
                    />
                    <button
                        type="submit"
                        style={styles.uploadButton}
                    >
                        Upload Image
                    </button>
                </form>
                
                <section style={styles.gallery}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Gallery item ${index + 1}`} style={styles.galleryItem} />
                    ))}
                </section>
            </section>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; 2024 Takenolab | <Link to="/contact" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Contact</Link> | 
                    <Link to="/privacy-policy" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Privacy Policy</Link> | 
                    <Link to="/terms-of-service" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default AlbumPage;
