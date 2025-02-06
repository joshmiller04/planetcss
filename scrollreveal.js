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
        origin: 'bottom',
        interval: 150
    });

    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline', { delay: 500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });

    ScrollReveal().reveal('.planet-card, .sun-card', {
        delay: 1000,
        interval: 500
    });
});
