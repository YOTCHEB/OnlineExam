// // TermsOfService.js
// import React from 'react';
// import styles from './TermsOfService.css'; // Assuming you use CSS modules for styles

// const TermsOfService = () => {
//     return (
//         <div className={styles.container}>
//             <header className={styles.header}>
//                 <h1>Terms of Service</h1>
//             </header>
//             <main className={styles.main}>
//                 <h2>Introduction</h2>
//                 <p>
//                     Welcome to Online Exam. By using our services, you agree to comply with and be bound by these terms of service. Please read them carefully.
//                 </p>
//                 <h2>Usage of Services</h2>
//                 <p>
//                     You agree to use our services only for lawful purposes and in accordance with our terms. We reserve the right to terminate your access if you violate these terms.
//                 </p>
//                 <h2>Limitation of Liability</h2>
//                 <p>
//                     Our liability for any damages arising from the use of our services is limited to the maximum extent permitted by law.
//                 </p>
//                 <h2>Changes to Terms</h2>
//                 <p>
//                     We may update these terms from time to time. We will notify you of any significant changes by posting the new terms on our website.
//                 </p>
//                 <h2>Contact Us</h2>
//                 <p>
//                     If you have any questions about these terms, please contact us at <a href="mailto:support@onlineexam.com">support@onlineexam.com</a>.
//                 </p>
//             </main>
//         </div>
//     );
// };

// export default TermsOfService;
import React from 'react';
import styles from './TermsOfService.css'; // Assuming you use CSS modules for styles

const TermsOfService = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Terms of Service</h1>
            </header>
            <main className={styles.main}>
                <section>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to Takenolab. By using our services, you agree to comply with and be bound by these terms of service. These terms govern your use of our website and services. Please read them carefully.
                    </p>
                </section>

                <section>
                    <h2>Acceptance of Terms</h2>
                    <p>
                        By accessing and using the Takenolab website and services, you agree to abide by these terms and conditions. If you do not agree to these terms, please do not use our website or services.
                    </p>
                </section>

                <section>
                    <h2>Usage of Services</h2>
                    <p>
                        You agree to use our services only for lawful purposes and in accordance with our terms. You must not use our services:
                    </p>
                    <ul>
                        <li>In any way that breaches any applicable local, national, or international law or regulation.</li>
                        <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material.</li>
                        <li>To impersonate or attempt to impersonate Takenolab, a Takenolab employee, another user, or any other person or entity.</li>
                    </ul>
                </section>

                <section>
                    <h2>User Accounts</h2>
                    <p>
                        To access some features of our services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>
                    <p>
                        You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to protect your account information.
                    </p>
                </section>

                <section>
                    <h2>Intellectual Property</h2>
                    <p>
                        All content and materials available on our website, including but not limited to text, graphics, logos, images, and software, are the property of Takenolab or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2>Limitation of Liability</h2>
                    <p>
                        Our liability for any damages arising from the use of our services is limited to the maximum extent permitted by law. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                    </p>
                </section>

                <section>
                    <h2>Changes to Terms</h2>
                    <p>
                        We may update these terms from time to time. We will notify you of any significant changes by posting the new terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns about these terms, please contact us at:
                    </p>
                    <p>
                        <a href="mailto:support@takenolab.com" className={styles.contactLink}>support@takenolab.com</a>
                    </p>
                </section>
            </main>
        </div>
    );
};

export default TermsOfService;
