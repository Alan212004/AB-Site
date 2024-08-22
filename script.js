document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear any previous messages
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        messageDiv.textContent = 'Please fill out all fields.';
        return;
    }

    if (password !== confirmPassword) {
        messageDiv.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass
    messageDiv.textContent = 'Signup successful!';
    messageDiv.style.color = 'green';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        localStorage.setItem('cancelError', 'Passwords do not match.');
    } else {
        localStorage.removeItem('cancelError');
    }

    window.location.href = 'home.html';  // Redirect to the home page
});
document.addEventListener('DOMContentLoaded', function() {
    const errorMessageDiv = document.getElementById('errorMessage');
    const errorMessage = localStorage.getItem('cancelError');

    if (errorMessage) {
        errorMessageDiv.textContent = errorMessage;
        localStorage.removeItem('cancelError');  // Clear the message after showing it
    }
});