document.addEventListener('DOMContentLoaded', function() {
    const hireMeButton = document.querySelector('.btn');
    const socialIcons = document.querySelectorAll('.social-icons a');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const socialIconsLinks = document.querySelectorAll('.social-icons a');
    const moonIcon = themeToggleButton.querySelector('.fa-moon');
    const sunIcon = themeToggleButton.querySelector('.fa-sun');

    hireMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for your interest! Please contact me at corporalmarlyn7@gmail.com.');
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You clicked on the ${this.querySelector('i').classList[1].split('-')[1]} icon.`);
        });
    });

    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        socialIconsLinks.forEach(link => link.classList.toggle('dark-mode'));
        themeToggleButton.classList.toggle('dark-mode');
        moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';
        sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});