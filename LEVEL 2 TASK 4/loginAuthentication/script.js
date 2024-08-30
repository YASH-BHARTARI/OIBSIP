// Dummy database for storing users
const users = {};

// Register Function
function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const message = document.getElementById('registerMessage');

    if (username && password) {
        if (users[username]) {
            message.textContent = 'User already exists!';
        } else {
            users[username] = password;
            message.textContent = 'Registration successful!';
        }
    } else {
        message.textContent = 'Please enter username and password!';
    }
}

// Login Function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (username && password) {
        if (users[username] === password) {
            message.textContent = 'Login successful!';
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('securedSection').style.display = 'block';
        } else {
            message.textContent = 'Invalid username or password!';
        }
    } else {
        message.textContent = 'Please enter username and password!';
    }
}

// Logout Function
function logout() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('securedSection').style.display = 'none';
}
