
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles (can be moved to a separate CSS file if preferred)
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        background: '#c2185b', // Bright Pink header
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    },
    nav: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        display: 'inline',
        margin: '0 15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ffeb3b', // Yellow on hover
    },
    main: {
        background: '#fff', // White background for main content
        borderRadius: '10px',
        margin: '20px auto',
        padding: '30px',
        width: '90%',
        maxWidth: '900px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    h1: {
        color: '#c2185b', // Bright Pink for headings
        marginBottom: '20px',
        fontSize: '2.5em',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    th: {
        padding: '12px',
        textAlign: 'center',
        border: '1px solid #ddd',
        backgroundColor: '#8e24aa', // Purple header for table
        color: '#fff',
    },
    td: {
        padding: '12px',
        textAlign: 'center',
        border: '1px solid #ddd',
    },
    evenRow: {
        backgroundColor: '#f3e5f5', // Light purple for even rows
    },
    oddRow: {
        backgroundColor: '#fce4ec', // Light pink for odd rows
    },
    hoverRow: {
        backgroundColor: '#d1c4e9', // Slightly darker purple on hover
    },
    footer: {
        background: '#c2185b', // Bright Pink footer
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        position: 'relative',
        bottom: '0',
        width: '100%',
        top:"280px",
    },
    footerText: {
        margin: 0,
    },
    footerLink: {
        color: '#ffeb3b', // Yellow links
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
        
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const ResultsPage = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch or load results from localStorage
        const storedResults = JSON.parse(localStorage.getItem('results')) || [];
        setResults(storedResults);
    }, []);

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
                <h1 style={styles.h1}>Published Results</h1>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>User</th>
                            <th style={styles.th}>Percent</th>
                            <th style={styles.th}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr
                                key={index}
                                style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.hoverRow.backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.evenRow.backgroundColor : styles.oddRow.backgroundColor}
                            >
                                <td>{result.user}</td>
                                <td>{result.percent}</td>
                                <td>{result.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <footer style={styles.footer}>
                <p style={styles.footerText}>&copy; 2024 Online Exam | <Link to="/contact" style={styles.footerLink}>Contact</Link> | <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link> | <Link to="/terms-of-service" style={styles.footerLink}>Terms of Service</Link></p>
            </footer>
        </div>
    );
};

export default ResultsPage;
