// Update the footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Hover effects on cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Scroll to top button functionality
const scrollButton = document.createElement("button");
scrollButton.innerText = "↑ Top";
scrollButton.classList.add("scroll-to-top");
document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.backgroundColor = "#007bff";
scrollButton.style.color = "white";
scrollButton.style.border = "none";
scrollButton.style.padding = "10px 15px";
scrollButton.style.cursor = "pointer";
scrollButton.style.borderRadius = "5px";
scrollButton.style.display = "none";

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Scroll to top smoothly when the button is clicked
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});