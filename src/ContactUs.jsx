import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f0f4f8', // Light grey background
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        backgroundColor: '#3f51b5', // Indigo
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 20px',
        fontSize: '1.2em',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ffeb3b', // Yellow on hover
    },
    main: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        margin: '20px auto',
        padding: '30px',
        width: '90%',
        maxWidth: '600px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    title: {
        color: '#3f51b5', // Indigo
        marginBottom: '20px',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    button: {
        backgroundColor: '#3f51b5', // Indigo
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#303f9f', // Darker Indigo on hover
    },
    footer: {
        backgroundColor: '#3f51b5', // Indigo
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        position: 'relative',
        bottom: 0,
        width: '100%',
    },
    footerLink: {
        color: '#ffeb3b', // Yellow
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0 10px',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.navList}>
                    
                        <li><Link to="/" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Home</Link></li>
                        <li><Link to="/about" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>About</Link></li>
                        <li><Link to="/contact" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Contact</Link></li>
                        <li><Link to="/results" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Results</Link></li>
                        <li><Link to="/admin" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
            <main style={styles.main}>
                <h1 style={styles.title}>Contact Us</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message">Message:</label><br />
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        />
                    </div>
                    <button type="submit" style={styles.button} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Send</button>
                </form>
            </main>
            <footer style={styles.footer}>
                <p>
                    &copy; 2024 Online Exam | 
                    <Link to="/contact" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Contact</Link> | 
                    <Link to="/privacy-policy" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Privacy Policy</Link> | 
                    <Link to="/terms-of-service" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default ContactUs;
