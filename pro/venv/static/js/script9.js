// Load user profile data from localStorage or default to initial values
document.addEventListener('DOMContentLoaded', function () {
    const userName = localStorage.getItem('user-name') || 'John Doe';
    const userEmail = localStorage.getItem('user-email') || 'johndoe@example.com';
    const userAddress = localStorage.getItem('user-address') || '123 Amazon St., Seattle, WA';

    // Display user data on the profile page
    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-email').textContent = userEmail;
    document.getElementById('user-address').textContent = userAddress;

    // Populate form fields with the stored values
    document.getElementById('name').value = userName;
    document.getElementById('email').value = userEmail;
    document.getElementById('address').value = userAddress;
});

// Handle form submission and save data to localStorage
document.getElementById('profile-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Save the updated data to localStorage
    localStorage.setItem('user-name', name);
    localStorage.setItem('user-email', email);
    localStorage.setItem('user-address', address);

    // Update profile info on the page
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-address').textContent = address;

    alert('Profile updated successfully!');
});