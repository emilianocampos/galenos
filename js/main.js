AOS.init();

let carouselInterval = 3000; // Intervalo en milisegundos (por ejemplo, 3000 para 3 segundos)
let myCarousel = document.getElementById('carouselExample');

let carousel = new bootstrap.Carousel(myCarousel, {
  interval: false // Desactiva el intervalo predeterminado de Bootstrap
});

function avanzarDiapositiva() {
  carousel.next();
}

setInterval(avanzarDiapositiva, carouselInterval);