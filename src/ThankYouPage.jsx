import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYouPage.css'; // Import the CSS file for custom styles if needed

const ThankYouPage = () => {
    return (
        <div className="thank-you-container">
            <header className="thank-you-header">
                <nav>
                    <ul>
                    <img src="/logo.png" alt="Takenolab Logo" className="logo" />takenoLAB
                        <li><Link to="/" className="navLink">Home</Link></li>
                        <li><Link to="/about" className="navLink">About</Link></li>
                        <li><Link to="/contact" className="navLink">Contact</Link></li>
                        <li><Link to="/results" className="navLink">Results</Link></li>
                        <li><Link to="/admin" className="navLink">Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="thank-you-main">
                <h1>Thank You!</h1>
                <p>Your exam has been successfully submitted.</p>
                <p>Please be patient while we process your results. The results will be available soon.</p>
                <p><Link to="/" className="return-home">Return to Home</Link></p>
            </main>
            <footer className="thank-you-footer">
                <p>&copy; 2024 Online Exam | <Link to="/contact" className="footerLink">Contact</Link> | 
                    <Link to="/privacy-policy" className="footerLink">Privacy Policy</Link> | 
                    <Link to="/terms-of-service" className="footerLink">Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default ThankYouPage;
