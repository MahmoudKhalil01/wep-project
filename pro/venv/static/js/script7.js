document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        document.getElementById('response-message').textContent = 'Thank you for your message, ' + name + '!';
        document.getElementById('contact-form').reset();
    }, 1000);
});