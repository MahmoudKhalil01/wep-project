console.log("Page 1 script loaded!");

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

// List of valid usernames and passwords
const users = {
    "admin1": "1",
    "admin2": "2",
    "admin3": "3",
    "admin4": "4"
};

function checkInputs() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

}

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

submitButton.addEventListener('click', function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (users[username] && users[username] === password) {
        window.location.href = "page2"; // Redirect to page2.html
    } else {
        alert("Invalid username or password. Please try again.");
    }
});