function login() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Logged in with: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
}
