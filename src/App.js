
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import context provider
import { AppProvider } from './AppContext';

// Import pages
import HomePage from './HomePage';
import AboutPage from './AboutUs';
import ContactPage from './ContactUs';
import ResultsPage from './ResultsPage';
import AdminDashboard from './AdminDashboard';
import ExamConditions from './ExamConditions';
import PhotoAlbum from './AlbumPage';
import RegisterPage from './SignUp'; 
import PrivacyPolicyPage from './PrivacyPolicy';
import TermsOfServicePage from './TermsOfService';
import ThankYouPage from './ThankYouPage';
import Sing from './Sing';
import LoginPage from './LoginPage';
import ExamPage from "./ExamPage";

const App = () => {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/exam-conditions" element={<ExamConditions />} />
                <Route path="/photo-album" element={<PhotoAlbum />} />
                <Route path="/sing" element={<Sing />} /> {/* This should match the link path */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/register-page" element={<RegisterPage />} />
                <Route path="/exam-page" element={<ExamPage />} />
            </Routes>
        </AppProvider>
    );
};

export default App;
