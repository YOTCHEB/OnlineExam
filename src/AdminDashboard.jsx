// import React, { useState, useEffect } from 'react';
// import {
//     TextField,
//     Button,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Snackbar,
//     Alert,
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Divider,
//     Container,
//     Box,
//     Select,
//     MenuItem,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import bcrypt from 'bcryptjs';
// import MenuIcon from '@mui/icons-material/Menu';
// import "./Admin.css";

// const AdminDashboard = () => {
//     const [showLogin, setShowLogin] = useState(true);
//     const [password, setPassword] = useState('');
//     const [adminName, setAdminName] = useState('');
//     const [questions, setQuestions] = useState([]);
//     const [results, setResults] = useState([]);
//     const [examDetails, setExamDetails] = useState({ title: '', description: '', startTime: '' });
//     const [activeSection, setActiveSection] = useState('question-section');
//     const [formData, setFormData] = useState({
//         question: '',
//         type: 'multiple-choice',
//         optionA: '',
//         optionB: '',
//         optionC: '',
//         optionD: '',
//         correctOption: '',
//     });
//     const [correctionData, setCorrectionData] = useState({ studentName: '', score: '' });
//     const [snackbarMessage, setSnackbarMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!showLogin) {
//             loadQuestions();
//             loadResults();
//             loadExamDetails();
//         }
//     }, [showLogin]);

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const storedHash = localStorage.getItem('adminPasswordHash');
//         if (!storedHash) {
//             alert('Admin password hash not found.');
//             return;
//         }
//         if (!bcrypt.compareSync(password, storedHash)) {
//             alert("Incorrect password");
//             navigate('/admin-login');
//         } else {
//             setAdminName(localStorage.getItem('adminName'));
//             setShowLogin(false);
//         }
//     };

//     const loadQuestions = () => {
//         const questions = JSON.parse(localStorage.getItem('questions')) || [];
//         setQuestions(questions);
//     };

//     const loadResults = () => {
//         const results = JSON.parse(localStorage.getItem('publishedResults')) || [];
//         setResults(results);
//     };

//     const loadExamDetails = () => {
//         const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '', startTime: '' };
//         setExamDetails(examDetails);
//     };

//     const updateExamDetails = () => {
//         localStorage.setItem('examDetails', JSON.stringify(examDetails));
//         alert('Exam details updated successfully!');
//     };

//     const handleQuestionAdd = () => {
//         const newQuestion = {
//             question: formData.question,
//             type: formData.type,
//             options: formData.type === 'multiple-choice' ? {
//                 A: formData.optionA,
//                 B: formData.optionB,
//                 C: formData.optionC,
//                 D: formData.optionD,
//             } : null,
//             correctOption: formData.type === 'multiple-choice' ? formData.correctOption.toUpperCase() : null,
//         };
//         const updatedQuestions = [...questions, newQuestion];
//         localStorage.setItem('questions', JSON.stringify(updatedQuestions));
//         setQuestions(updatedQuestions);
//         resetFormData();
//         alert('Question added successfully!');
//     };

//     const resetFormData = () => {
//         setFormData({
//             question: '',
//             type: 'multiple-choice',
//             optionA: '',
//             optionB: '',
//             optionC: '',
//             optionD: '',
//             correctOption: '',
//         });
//     };

//     const handleQuestionDelete = (index) => {
//         const updatedQuestions = questions.filter((_, i) => i !== index);
//         localStorage.setItem('questions', JSON.stringify(updatedQuestions));
//         setQuestions(updatedQuestions);
//         setSnackbarMessage('Question deleted.');
//         setOpenSnackbar(true);
//     };

//     const handleSnackbarClose = () => {
//         setOpenSnackbar(false);
//     };

//     const toggleDrawer = () => {
//         setDrawerOpen(!drawerOpen);
//     };

//     const handleCorrectionSubmit = () => {
//         const updatedResults = [...results, correctionData];
//         localStorage.setItem('results', JSON.stringify(updatedResults));
//         setResults(updatedResults);
//         setCorrectionData({ studentName: '', score: '' });
//         alert('Correction submitted successfully!');
//     };

//     const publishResults = () => {
//         if (results.length === 0) {
//             alert('No results to publish!');
//             return;
//         }
        
//         // Enregistrez les résultats publiés dans le localStorage
//         localStorage.setItem('publishedResults', JSON.stringify(results));
//         alert('Results Published!');
        
//         // Recharge les résultats pour garantir que l'affichage est mis à jour
//         loadResults(); 
//     };

//     return (
//         <Container maxWidth="lg">
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6">Admin Dashboard</Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//                 <List>
//                     <ListItem button onClick={() => setActiveSection('question-section')}>
//                         <ListItemText primary="Manage Questions" />
//                     </ListItem>
//                     <Divider />
//                     <ListItem button onClick={() => setActiveSection('result-section')}>
//                         <ListItemText primary="View Results" />
//                     </ListItem>
//                     <ListItem button onClick={() => setActiveSection('publish-section')}>
//                         <ListItemText primary="Publish Results" />
//                     </ListItem>
//                     <ListItem button onClick={() => setActiveSection('manage-exam-section')}>
//                         <ListItemText primary="Manage Exam" />
//                     </ListItem>
//                     <ListItem button onClick={() => setActiveSection('correction-section')}>
//                         <ListItemText primary="Corrections" />
//                     </ListItem>
//                     <Divider />
//                     <ListItem button onClick={() => setShowLogin(true)}>
//                         <ListItemText primary="Logout" />
//                     </ListItem>
//                 </List>
//             </Drawer>

//             {showLogin ? (
//                 <form onSubmit={handleLogin}>
//                     <TextField
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         fullWidth
//                     />
//                     <Button variant="contained" type="submit">
//                         Login
//                     </Button>
//                 </form>
//             ) : (
//                 <Box className="dashboard-content">
//                     {activeSection === 'question-section' && (
//                         <Box className="question-section">
//                             <Typography variant="h5">Manage Questions</Typography>
//                             <TextField
//                                 label="Question"
//                                 value={formData.question}
//                                 onChange={(e) => setFormData({ ...formData, question: e.target.value })}
//                                 fullWidth
//                             />
//                             <Select
//                                 value={formData.type}
//                                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                                 fullWidth
//                             >
//                                 <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
//                                 <MenuItem value="written">Written</MenuItem>
//                             </Select>
//                             {formData.type === 'multiple-choice' && (
//                                 <Box>
//                                     <TextField
//                                         label="Option A"
//                                         value={formData.optionA}
//                                         onChange={(e) => setFormData({ ...formData, optionA: e.target.value })}
//                                     />
//                                     <TextField
//                                         label="Option B"
//                                         value={formData.optionB}
//                                         onChange={(e) => setFormData({ ...formData, optionB: e.target.value })}
//                                     />
//                                     <TextField
//                                         label="Option C"
//                                         value={formData.optionC}
//                                         onChange={(e) => setFormData({ ...formData, optionC: e.target.value })}
//                                     />
//                                     <TextField
//                                         label="Option D"
//                                         value={formData.optionD}
//                                         onChange={(e) => setFormData({ ...formData, optionD: e.target.value })}
//                                     />
//                                     <TextField
//                                         label="Correct Option (A/B/C/D)"
//                                         value={formData.correctOption}
//                                         onChange={(e) => setFormData({ ...formData, correctOption: e.target.value })}
//                                     />
//                                 </Box>
//                             )}
//                             <Button variant="contained" color="primary" onClick={handleQuestionAdd}>
//                                 Add Question
//                             </Button>

//                             <TableContainer component={Paper}>
//                                 <Table>
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell>Question</TableCell>
//                                             <TableCell>Actions</TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {questions.map((q, index) => (
//                                             <TableRow key={index}>
//                                                 <TableCell>{q.question}</TableCell>
//                                                 <TableCell>
//                                                     <Button variant="contained" color="secondary" onClick={() => handleQuestionDelete(index)}>
//                                                         Delete
//                                                     </Button>
//                                                 </TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                         </Box>
//                     )}

//                     {activeSection === 'result-section' && (
//                         <Box className="result-section">
//                             <Typography variant="h5">Published Results</Typography>
//                             <TableContainer component={Paper}>
//                                 <Table>
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell>Student Name</TableCell>
//                                             <TableCell>Score</TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {results.map((result, index) => (
//                                             <TableRow key={index}>
//                                                 <TableCell>{result.studentName}</TableCell>
//                                                 <TableCell>{result.score}</TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                         </Box>
//                     )}

//                     {activeSection === 'publish-section' && (
//                         <Box className="publish-section">
//                             <Button variant="contained" color="primary" onClick={publishResults}>
//                                 Publish Results
//                             </Button>
//                         </Box>
//                     )}

//                     {activeSection === 'manage-exam-section' && (
//                         <Box className="manage-exam-section">
//                             <Typography variant="h5">Manage Exam</Typography>
//                             <TextField
//                                 label="Title"
//                                 value={examDetails.title}
//                                 onChange={(e) => setExamDetails({ ...examDetails, title: e.target.value })}
//                                 fullWidth
//                             />
//                             <TextField
//                                 label="Description"
//                                 value={examDetails.description}
//                                 onChange={(e) => setExamDetails({ ...examDetails, description: e.target.value })}
//                                 fullWidth
//                             />
//                             <TextField
//                                 label="Start Time"
//                                 type="datetime-local"
//                                 value={examDetails.startTime}
//                                 onChange={(e) => setExamDetails({ ...examDetails, startTime: e.target.value })}
//                                 fullWidth
//                             />
//                             <Button variant="contained" color="primary" onClick={updateExamDetails}>
//                                 Update Exam Details
//                             </Button>
//                         </Box>
//                     )}

//                     {activeSection === 'correction-section' && (
//                         <Box className="correction-section">
//                             <Typography variant="h5">Submit Correction</Typography>
//                             <TextField
//                                 label="Student Name"
//                                 value={correctionData.studentName}
//                                 onChange={(e) => setCorrectionData({ ...correctionData, studentName: e.target.value })}
//                                 fullWidth
//                             />
//                             <TextField
//                                 label="Score"
//                                 value={correctionData.score}
//                                 onChange={(e) => setCorrectionData({ ...correctionData, score: e.target.value })}
//                                 fullWidth
//                             />
//                             <Button variant="contained" color="primary" onClick={handleCorrectionSubmit}>
//                                 Submit Correction
//                             </Button>
//                         </Box>
//                     )}
//                 </Box>
//             )}
//             <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
//                 <Alert onClose={handleSnackbarClose} severity="success">
//                     {snackbarMessage}
//                 </Alert>
//             </Snackbar>
//         </Container>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';  
import {
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Snackbar,
    Alert,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container,
    Box,
    Select,
    MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import MenuIcon from '@mui/icons-material/Menu';
import "./Admin.css";

const AdminDashboard = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [adminName, setAdminName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [examDetails, setExamDetails] = useState({ title: '', description: '', startTime: '' });
    const [activeSection, setActiveSection] = useState('question-section');
    const [formData, setFormData] = useState({
        question: '',
        type: 'multiple-choice',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
    });
    const [correctionData, setCorrectionData] = useState({ studentName: '', score: '' });
    const [submissions, setSubmissions] = useState([]); // State for tracking submissions
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!showLogin) {
            loadQuestions();
            loadResults();
            loadExamDetails();
            loadSubmissions(); // Load submissions on login
        }
    }, [showLogin]);

    const handleLogin = (e) => {
        e.preventDefault();
        const storedHash = localStorage.getItem('adminPasswordHash');
        if (!storedHash) {
            showSnackbar('Admin password hash not found.', 'error');
            return;
        }
        if (!bcrypt.compareSync(password, storedHash)) {
            showSnackbar("Incorrect password", 'error');
            navigate('/admin-login');
        } else {
            setAdminName(localStorage.getItem('adminName'));
            setShowLogin(false);
        }
    };

    const loadQuestions = () => {
        const questions = JSON.parse(localStorage.getItem('questions')) || [];
        setQuestions(questions);
    };

    const loadResults = () => {
        const results = JSON.parse(localStorage.getItem('results')) || [];
        const publishedResults = JSON.parse(localStorage.getItem('publishedResults')) || [];
        setResults([...results, ...publishedResults]); 
    };

    const loadExamDetails = () => {
        const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '', startTime: '' };
        setExamDetails(examDetails);
    };

    const loadSubmissions = () => {
        const submissions = JSON.parse(localStorage.getItem('submissions')) || []; // Load submissions
        setSubmissions(submissions);
    };

    const updateExamDetails = () => {
        localStorage.setItem('examDetails', JSON.stringify(examDetails));
        showSnackbar('Exam details updated successfully!');
    };

    const handleQuestionAdd = () => {
        const newQuestion = {
            question: formData.question,
            type: formData.type,
            options: formData.type === 'multiple-choice' ? {
                A: formData.optionA,
                B: formData.optionB,
                C: formData.optionC,
                D: formData.optionD,
            } : null,
            correctOption: formData.type === 'multiple-choice' ? formData.correctOption.toUpperCase() : null,
        };
        const updatedQuestions = [...questions, newQuestion];
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));
        setQuestions(updatedQuestions);
        resetFormData();
        showSnackbar('Question added successfully!');
    };

    const resetFormData = () => {
        setFormData({
            question: '',
            type: 'multiple-choice',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            correctOption: '',
        });
    };

    const handleQuestionDelete = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));
        setQuestions(updatedQuestions);
        showSnackbar('Question deleted.');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const showSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Save exam submissions with the user's name and score
    const saveExamResults = (studentName, score) => {
        const userResults = { studentName, score };
        const updatedResults = [...results, userResults];
        localStorage.setItem('results', JSON.stringify(updatedResults));
        setResults(updatedResults);

        const updatedSubmissions = [...submissions, { studentName, score }];
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
        setSubmissions(updatedSubmissions);
    };

    // Submit corrected score
    const handleCorrectionSubmit = (submission) => {
        const updatedResults = results.map((result) =>
            result.studentName === submission.studentName
                ? { ...result, score: correctionData.score }
                : result
        );

        localStorage.setItem('results', JSON.stringify(updatedResults));
        setResults(updatedResults);
        setCorrectionData({ studentName: '', score: '' });
        showSnackbar('Correction submitted successfully!');
    };

    // Publish all corrected results
    const publishResults = () => {
        if (results.length === 0) {
            showSnackbar('No results to publish!', 'error');
            return;
        }
        
        localStorage.setItem('publishedResults', JSON.stringify(results));
        showSnackbar('Results Published!');
        loadResults(); 
    };

    const deleteSubmission = (studentName) => {
        const updatedSubmissions = submissions.filter(submission => submission.studentName !== studentName);
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
        setSubmissions(updatedSubmissions);
        showSnackbar('Submission deleted.');
    };

    return (
        <Container maxWidth="lg">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Admin Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={() => setActiveSection('question-section')}>
                        <ListItemText primary="Manage Questions" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => setActiveSection('result-section')}>
                        <ListItemText primary="View Results" />
                    </ListItem>
                    <ListItem button onClick={() => setActiveSection('publish-section')}>
                        <ListItemText primary="Publish Results" />
                    </ListItem>
                    <ListItem button onClick={() => setActiveSection('manage-exam-section')}>
                        <ListItemText primary="Manage Exam" />
                    </ListItem>
                    <ListItem button onClick={() => setActiveSection('correction-section')}>
                        <ListItemText primary="Corrections" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => setShowLogin(true)}>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>

            {showLogin ? (
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                </form>
            ) : (
                <Box className="dashboard-content">
                    {activeSection === 'question-section' && (
                        <Box className="question-section">
                            <Typography variant="h4">Manage Questions</Typography>
                            <form>
                                <TextField
                                    label="Question"
                                    value={formData.question}
                                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                    fullWidth
                                    required
                                />
                                <Select
                                    label="Type"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    fullWidth
                                >
                                    <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                                    <MenuItem value="true-false">True/False</MenuItem>
                                </Select>

                                {formData.type === 'multiple-choice' && (
                                    <>
                                        <TextField
                                            label="Option A"
                                            value={formData.optionA}
                                            onChange={(e) => setFormData({ ...formData, optionA: e.target.value })}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            label="Option B"
                                            value={formData.optionB}
                                            onChange={(e) => setFormData({ ...formData, optionB: e.target.value })}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            label="Option C"
                                            value={formData.optionC}
                                            onChange={(e) => setFormData({ ...formData, optionC: e.target.value })}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            label="Option D"
                                            value={formData.optionD}
                                            onChange={(e) => setFormData({ ...formData, optionD: e.target.value })}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            label="Correct Option"
                                            value={formData.correctOption}
                                            onChange={(e) => setFormData({ ...formData, correctOption: e.target.value })}
                                            fullWidth
                                            required
                                        />
                                    </>
                                )}

                                <Button variant="contained" onClick={handleQuestionAdd}>
                                    Add Question
                                </Button>
                            </form>

                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Question</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Correct Option</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {questions.map((question, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{question.question}</TableCell>
                                                <TableCell>{question.type}</TableCell>
                                                <TableCell>{question.correctOption}</TableCell>
                                                <TableCell>
                                                    <Button onClick={() => handleQuestionDelete(index)}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}

                    {activeSection === 'correction-section' && (
                        <Box className="correction-section">
                            <Typography variant="h4">Correct Exam Submissions</Typography>
                            {submissions.map((submission, index) => (
                                <Box key={index}>
                                    <Typography variant="h6">Student: {submission.studentName}</Typography>
                                    <TextField
                                        label="Corrected Score"
                                        value={correctionData.score}
                                        onChange={(e) =>
                                            setCorrectionData({ studentName: submission.studentName, score: e.target.value })
                                        }
                                        fullWidth
                                    />
                                    <Button variant="contained" onClick={() => handleCorrectionSubmit(submission)}>
                                        Submit Correction
                                    </Button>
                                    <Button variant="contained" color="error" onClick={() => deleteSubmission(submission.studentName)}>
                                        Delete
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {activeSection === 'result-section' && (
                        <Box className="result-section">
                            <Typography variant="h4">View Results</Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Student Name</TableCell>
                                            <TableCell>Score</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results.map((result, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{result.studentName}</TableCell>
                                                <TableCell>{result.score}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}

                    {activeSection === 'publish-section' && (
                        <Box className="publish-section">
                            <Typography variant="h4">Publish Results</Typography>
                            <Button variant="contained" onClick={publishResults}>
                                Publish
                            </Button>
                        </Box>
                    )}

                    {activeSection === 'manage-exam-section' && (
                        <Box className="manage-exam-section">
                            <Typography variant="h4">Manage Exam</Typography>
                            <form>
                                <TextField
                                    label="Title"
                                    value={examDetails.title}
                                    onChange={(e) => setExamDetails({ ...examDetails, title: e.target.value })}
                                    fullWidth
                                />
                                <TextField
                                    label="Description"
                                    value={examDetails.description}
                                    onChange={(e) => setExamDetails({ ...examDetails, description: e.target.value })}
                                    fullWidth
                                />
                                <TextField
                                    label="Start Time"
                                    value={examDetails.startTime}
                                    onChange={(e) => setExamDetails({ ...examDetails, startTime: e.target.value })}
                                    fullWidth
                                />
                                <Button variant="contained" onClick={updateExamDetails}>
                                    Save Exam Details
                                </Button>
                            </form>
                        </Box>
                    )}
                </Box>
            )}

            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default AdminDashboard;
