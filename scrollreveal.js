document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.sun-card', {
        delay: 300,
        duration: 1000,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.planet-card', {
        delay: 500, 
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 300 
    });

    ScrollReveal().reveal('.headline', { delay: 400 });
    ScrollReveal().reveal('.tagline', { delay: 800 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });

    ScrollReveal().reveal('.story', {
        delay: 500,
        interval: 200
    });
});
