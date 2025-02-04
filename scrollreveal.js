document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.sun-card', {
        delay: 100,
        duration: 1000,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.planet-card', {
        delay: 200,
        duration: 1000,
        distance: '50px',
        origin: 'left',  // Animates from left to right
        interval: 200  // Ensures smooth staggered reveal
    });

    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline', { delay: 500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });
});
