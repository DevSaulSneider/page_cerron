// Inicia la libreria para la animacion
AOS.init({
    duration: 3000
});


var animacion = document.getElementById("texto-animado");

var typewriter = new Typewriter(animacion, {
    loop: true
})

typewriter.typeString("Mensaje de prueba.")
    .pauseFor(1000)
    .deleteAll()
    .typeString('Hola mundo')
    .pauseFor(1000)
    .start();