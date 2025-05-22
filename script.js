// Inicialización del controlador de ScrollMagic
const controller = new ScrollMagic.Controller();

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
