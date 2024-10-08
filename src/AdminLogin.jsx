import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import "./AdminLogin.css"

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedPassword = localStorage.getItem('adminPassword');

        if (storedPassword && password === storedPassword.split('-')[1]) {
            navigate('/admin'); // Redirect to admin dashboard
        } else {
            alert('Incorrect password!');
        }
    };

    return (
        <div className="body">
            <header className="header">
                <nav>
                    <ul className="nav">
                   
                        <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                        <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
                        <li className="navItem"><Link to="/contact" className="navLink">Contact</Link></li>
                        <li className="navItem"><Link to="/results" className="navLink">Results</Link></li>
                        <li className="navItem"><Link to="/admin" className="navLink">Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                <h1 className="h1">Admin Login</h1>
                <form id="login-form">
                    <label htmlFor="password" className="label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    /><br />
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="button"
                    >
                        Login
                    </button>
                </form>
            </main>

            <footer className="footer">
                <p className="footerText">
                    &copy; 2024 Online Exam | <Link to="/contact" className="footerLink">Contact</Link> | <Link to="/privacy-policy" className="footerLink">Privacy Policy</Link> | <Link to="/terms-of-service" className="footerLink">Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default AdminLogin;
