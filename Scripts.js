// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect
const buttons = document.querySelectorAll('a');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#3498db';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#212121';
    });
});

// Greeting message
window.onload = function() {
    alert("Welcome to Yazid Mohamed's Portfolio!");
};
