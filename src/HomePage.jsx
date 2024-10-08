
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="body">
            <header className="header">
                <img src="./logo.png" alt="Logo" className="logo" />
                <h1>Takenolab</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link to="/results" className="nav-link">Results</Link></li>
                        <li className="nav-item"><Link to="/admin" className="nav-link">Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="main">
                <section className="hero">
                    <h1 className="hero-heading">Welcome to TakenolAB</h1>
                    <p className="hero-text">Your go-to platform for online exams.</p>
                    <Link to="/register-page" className="butto">Start Exam</Link>
                    <Link to="/photo-album" className="butto">View Photo Album</Link>
                </section>

                <section className="info-section">
                    <h2 className="info-section-heading">Why Web Development Matters</h2>
                    <p className="info-section-text">
                        Web development is crucial for building interactive and engaging websites. It encompasses a wide range of practices, from front-end development (the visual part of the website) to back-end development (the server-side operations). Effective web development ensures that websites are not only functional but also accessible and user-friendly.
                    </p>
                </section>

                <section className="info-section">
                    <h2 className="info-section-heading">The Importance of Web Design</h2>
                    <p className="info-section-text">
                        Web design is about creating visually appealing and intuitive interfaces. Good web design improves the user experience (UX) by making navigation easy and ensuring that the site is aesthetically pleasing. Key principles of web design include visual hierarchy, typography, and responsive design, which ensures the website looks great on all devices.
                    </p>
                </section>

                <section className="info-section">
                    <h2 className="info-section-heading">Responsive Design</h2>
                    <p className="info-section-text">
                        Responsive design allows a website to adapt to different screen sizes and devices. This approach ensures that users have a consistent experience whether they are on a desktop, tablet, or smartphone. By using fluid grids, flexible images, and media queries, responsive design helps maintain usability across various platforms.
                    </p>
                </section>

                <section className="info-section">
                    <h2 className="info-section-heading">Web Accessibility</h2>
                    <p className="info-section-text">
                        Web accessibility means making websites usable by people with disabilities. This includes designing with considerations for screen readers, keyboard navigation, and color contrast. By adhering to accessibility standards, developers ensure that all users, regardless of their abilities, can access and interact with web content effectively.
                    </p>
                </section>

                <section className="call-to-action">
                    <h2 className="call-to-action-heading">Join Us Today!</h2>
                    <p className="call-to-action-text">
                        Ready to make your online presence shine? Join Takenolab and explore the latest in web development and design. Our platform offers you a suite of tools and resources to enhance your skills and build amazing websites. Sign up today to get started!
                    </p>
                    <Link to="/sing" className="button">Sign Up Now</Link>
                </section>
            </div>

            <footer className="foote">
                <p className="foote-text">
                    &copy; 2024 Takenolab | <Link to="/contact" className="footer-link">Contact</Link> | 
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> | 
                    <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
