import React from 'react';
import styles from './PrivacyPolicy .css'; // Ensure the correct file name and path

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
            <img src="/logo.png" alt="Takenolab Logo" className="logo" />takenoLAB
                <h1 className={styles.title}>Privacy Policy</h1>
            </header>
            <section className={styles.content}>
                <h2 className={styles.subtitle}>Introduction</h2>
                <p className={styles.paragraph}>
                    Welcome to Online Exam. We are committed to protecting your privacy. This privacy policy explains how we collect, use, and disclose information about you when you use our services.
                </p>
                <h2 className={styles.subtitle}>Information We Collect</h2>
                <p className={styles.paragraph}>
                    We may collect personal information such as your name, email address, and other details that you provide to us. We also collect information about your usage of our services.
                </p>
                <h2 className={styles.subtitle}>How We Use Your Information</h2>
                <p className={styles.paragraph}>
                    We use your information to provide and improve our services, communicate with you, and for other purposes described in this policy.
                </p>
                <h2 className={styles.subtitle}>Contact Us</h2>
                <p className={styles.paragraph}>
                    If you have any questions about this privacy policy, please contact us at <a href="mailto:support@onlineexam.com" className={styles.email}>support@onlineexam.com</a>.
                </p>
            </section>
            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2024 Online Exam. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
