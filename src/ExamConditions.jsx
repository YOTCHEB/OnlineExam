import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ExamConditions.css'; // Import the CSS file

const ExamConditions = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsAgreed(event.target.checked);
    };

    const handleStartExam = () => {
        if (isAgreed) {
            navigate('/exam-page'); // Navigate to the exam page
        }
    };

    return (
        <div className="body">
            <header>
                <nav>
                    <ul>
                    
                        <li><Link to="/" className="navLink">Home</Link></li>
                        <li><Link to="/about" className="navLink">About</Link></li>
                        <li><Link to="/contact" className="navLink">Contact</Link></li>
                        <li><Link to="/results" className="navLink">Results</Link></li>
                        <li><Link to="/admin" className="navLink">Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="conditions-container">
                <h2>Exam Conditions</h2>
                <p>Before starting the exam, please read and agree to the following conditions:</p>
                <p>1. You must complete the exam within the allotted time.</p>
                <p>2. Cheating or using unauthorized materials is prohibited.</p>
                <p>3. Ensure that you have a stable internet connection.</p>
                <p>4. Your answers will be submitted automatically once the time is up.</p>
                <p>
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        onChange={handleCheckboxChange}
                    /> I agree to the terms and conditions.
                </p>
                <button
                    id="startExamBtn"
                    onClick={handleStartExam}
                    disabled={!isAgreed}
                >
                    Start Exam
                </button>
            </div>
            <footer>
                <p>&copy; 2024 Online Exam | <Link to="/contact">Contact</Link> | 
                    <Link to="/privacy-policy">Privacy Policy</Link> | 
                    <Link to="/terms-of-service">Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default ExamConditions;
