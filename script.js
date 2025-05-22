// Inicialización del controlador de ScrollMagic
const controller = new ScrollMagic.Controller();

// Inicializar el pasto con diferentes retardos
document.querySelectorAll('.grass').forEach((grass, index) => {
    grass.style.setProperty('--delay', Math.random() * 20);
});

// Animación de las nubes
gsap.to('.cloud-1', {
    x: '+=50',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'none'
});

gsap.to('.cloud-2', {
    x: '-=40',
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: 'none'
});

gsap.to('.cloud-3', {
    x: '+=45',
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: 'none'
});

gsap.to('.cloud-4', {
    x: '-=35',
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: 'none'
});

gsap.to('.cloud-5', {
    x: '+=40',
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'none'
});

// Animación del título
const titleTimeline = gsap.timeline()
    .from('.title', {
        opacity: 0,
        y: -50,
        duration: 1
    });

new ScrollMagic.Scene({
    triggerElement: '.first-scene',
    triggerHook: 0.8,
    reverse: false
})
.setTween(titleTimeline)
.addTo(controller);

// Animación de los personajes
const charactersTimeline = gsap.timeline()
    .from('.caperucita', {
        opacity: 0,
        x: -100,
        duration: 1
    })
    .from('.lobo', {
        opacity: 0,
        x: 100,
        duration: 1
    }, "-=0.5");

new ScrollMagic.Scene({
    triggerElement: '.characters',
    triggerHook: 0.7,
    reverse: false
})
.setTween(charactersTimeline)
.addTo(controller);
