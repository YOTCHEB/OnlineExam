import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    },
    header: {
        background: 'blue', // Vibrant coral header
        color: '#fff',
        padding: '15px 0',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 1,
        
    },
    nav: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
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
    main: {
        background: '#fff', // White background for the main content
        borderRadius: '10px',
        padding: '30px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    h1: {
        color: '#000', // Vibrant coral for the heading
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        margin: '15px 0 5px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        border: '2px solid ',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        fontSize: '1em',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: '#000', // Button color
        color: '#fff',
        fontSize: '1.1em',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
        background: '#e64a19', // Darker coral on hover
        transform: 'scale(1.05)',
    },
    p: {
        marginTop: '10px',
    },
    link: {
        color: 'blue',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    linkHover: {
        textDecoration: 'underline',
    },
    footer: {
        background: 'blue',
        color: '#fff',
        textAlign: 'center',
        padding: '15px 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    footerText: {
        margin: 0,
    },
};

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === username)) {
            alert('Username already exists.');
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        navigate('/login-page'); // Redirect to login page
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.nav}>
                    
                        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
                        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
                        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
                        <li style={styles.navItem}><Link to="/results" style={styles.navLink}>Results</Link></li>
                        <li style={styles.navItem}><Link to="/admin" style={styles.navLink}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
            <main style={styles.main}>
                <h1 style={styles.h1}>Register</h1>
                <form id="register-form">
                    <label htmlFor="username" style={styles.label}>Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                    <br />
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                    <br />
                    <button 
                        type="button" 
                        onClick={handleRegister} 
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.background = styles.buttonHover.background}
                        onMouseOut={(e) => e.currentTarget.style.background = styles.button.background}
                    >
                        Register
                    </button>
                </form>
                <p style={styles.p}>Already have an account? <Link to="/login-page" style={styles.link}>Login</Link></p>
            </main>
            <footer style={styles.footer}>
                <p style={styles.footerText}>&copy; 2024 Online Exam</p>
            </footer>
        </div>
    );
};

export default RegisterPage;
