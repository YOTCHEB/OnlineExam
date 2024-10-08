import React, { useState, useEffect } from 'react';  
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Button,
    Snackbar,
    Alert,
    Paper,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress, // Importer CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExamPage = () => {
    const [examDetails, setExamDetails] = useState({ title: '', description: '' });
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [studentName, setStudentName] = useState('');
    const [loading, setLoading] = useState(false); // État pour le chargement
    const navigate = useNavigate();

    useEffect(() => {
        loadExamDetails();
        loadQuestions();
    }, []);

    const loadExamDetails = () => {
        const details = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '' };
        setExamDetails(details);
    };

    const loadQuestions = () => {
        const loadedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        setQuestions(loadedQuestions);
    };

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: selectedOption,
        }));
    };

    const handleSubmit = () => {
        // Vérifier que toutes les questions sont répondues et que le nom est rempli
        if (!studentName.trim()) {
            setSnackbarMessage('Please enter your full name before submitting.');
            setOpenSnackbar(true);
            return;
        }

        if (questions.length === 0 || Object.keys(answers).length !== questions.length) {
            setSnackbarMessage('Please answer all questions before submitting.');
            setOpenSnackbar(true);
            return;
        }

        // Préparer les résultats pour la soumission
        const result = {
            studentName: studentName,
            score: calculateScore(),
        };

        // Sauvegarder les résultats dans le stockage local
        const results = JSON.parse(localStorage.getItem('results')) || [];
        localStorage.setItem('results', JSON.stringify([...results, result]));

        // Afficher le cercle de chargement et rediriger vers la page de remerciement
        setLoading(true); // Début du chargement
        setTimeout(() => {
            navigate('/thank-you'); // Rediriger vers la page de remerciement après un délai
        }, 2000); // Délai de 2 secondes (ajustez si nécessaire)
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.correctOption === answers[index]) {
                score += 1;
            }
        });
        return score;
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container className="container" maxWidth="lg">
            <AppBar position="static" className="appBar">
                <Toolbar className="toolbar">
                    <Typography variant="h6" className="title">{examDetails.title}</Typography>
                </Toolbar>
            </AppBar>
            
            <Box my={2} className="description">
                <Typography variant="h5">{examDetails.description}</Typography>
            </Box>
    
            <Box mb={2}>
                <TextField
                    label="Your Full Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    fullWidth
                    required
                />
            </Box>
            
            <TableContainer component={Paper} className="tableContainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((question, index) => (
                            <TableRow key={index}>
                                <TableCell className="tableCell">{question.question}</TableCell>
                                <TableCell className="tableCell">
                                    {question.type === 'multiple-choice' ? (
                                        <RadioGroup
                                            value={answers[index] || ''}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        >
                                            {Object.entries(question.options).map(([key, option]) => (
                                                <FormControlLabel
                                                    key={key}
                                                    value={key}
                                                    control={<Radio />}
                                                    label={option}
                                                />
                                            ))}
                                        </RadioGroup>
                                    ) : (
                                        <TextField
                                            label="Your Answer"
                                            value={answers[index] || ''}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                                            fullWidth
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
            <Box mt={2}>
                <Button variant="contained" className="submitButton" onClick={handleSubmit} disabled={loading}>
                    Submit Exam
                </Button>
                {loading && <CircularProgress size={24} style={{ marginLeft: '16px' }} />} {/* Affiche le cercle de chargement */}
            </Box>
    
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose} className="snackbar">
                <Alert onClose={handleSnackbarClose} severity="warning" className="alert">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );      
};

export default ExamPage;

