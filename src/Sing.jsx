import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
        alert('Sign Up successful!');
    };

    // Inline CSS styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f3e5f5', // Light purple background
        },
        form: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
        },
        title: {
            color: '#8e24aa', // Purple
            marginBottom: '20px',
            fontSize: '2em',
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '8px 0',
            borderRadius: '5px',
            border: '1px solid #ddd',
        },
        button: {
            backgroundColor: '#c2185b', // Bright pink
            color: '#fff',
            padding: '15px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.2em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%',
        },
        buttonHover: {
            backgroundColor: '#ab003c', // Darker pink on hover
        },
        link: {
            color: '#4caf50', // Green
            textDecoration: 'none',
            fontWeight: 'bold',
        },
        linkHover: {
            textDecoration: 'underline',
        }
    };

    return (
        <div style={styles.container}>
            <img src="/logo.png" alt="Takenolab Logo" className="logo" />takenoLAB
            <div style={styles.form}>
                <h1 style={styles.title}>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Sign Up
                    </button>
                </form>
                <p>Already have an account? <Link to="/login" style={styles.link} onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.linkHover.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;