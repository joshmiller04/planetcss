document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.sun-card', {
        delay: 100,
        duration: 1000,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.planet-card', {
        delay: 20000,
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 150
    });
});
