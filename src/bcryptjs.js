import bcrypt from 'bcryptjs';

// Example function for setting and checking hashed passwords
const authenticateAdmin = () => {
    const storedHash = localStorage.getItem('adminPasswordHash');
    if (!storedHash) {
        const name = prompt("Enter admin's name:");
        const password = prompt("Create a strong password:");
        const hash = bcrypt.hashSync(password, 10);
        localStorage.setItem('adminPasswordHash', hash);
        localStorage.setItem('adminName', name);
        alert('Admin credentials set. Please refresh the page.');
        window.location.reload();
    } else {
        const enteredPassword = prompt("Enter admin password:");
        if (!bcrypt.compareSync(enteredPassword, storedHash)) {
            alert("Incorrect password. Redirecting to login page.");
            navigate('/Admin-login'); // Redirect to login page
        }
    }
};
