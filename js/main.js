AOS.init();
var typed = new Typed('.title', {

  strings: ['VOLVE A LAS ACTIVIDADES Y A LOS DEPORTES QUE TE GUSTAN HACER, SIN DOLOR.'],
  
  smartBackspace:false,
    typeSpeed: 1,
});

let carouselInterval = 3000; // Intervalo en milisegundos (por ejemplo, 3000 para 3 segundos)
let myCarousel = document.getElementById('carouselExample');
let btn = document.getElementById('sub');


let carousel = new bootstrap.Carousel(myCarousel, {
  interval: false // Desactiva el intervalo predeterminado de Bootstrap
});

function avanzarDiapositiva() {
  carousel.next();
}

setInterval(avanzarDiapositiva, carouselInterval);



//ingreso de datos

function Ingreso(nombre, apellido, num, email, consulta) {

  this.nombre = nombre,
    this.apellido = apellido,
    this.num = num,
    this.email = email,
    this.consulta = consulta

}

//al tocar el boton sale un sweet a 
btn.addEventListener('click', () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Estamos procesando y enviando tu consulta !"
  });


})





