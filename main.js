//*Secciones
const seccionPrincipal = document.querySelector('#seccionPrincipal');
const seccionJuego = document.querySelector('#seccionJuego');
const seccionNuevaPalabra = document.querySelector('#seccionNuevaPalabra');

//*Seccion principal
const botonIniciarJuego = document.querySelector('#iniciarJuego');
const botonAgregarPalabra = document.querySelector('#agregarPalabra');

//*Seccion juego
const contenedorLetrasUsadas = document.querySelector('#letrasUsadas');
const contenedorLetrasCorrectas = document.querySelector('#letrasCorrectas');
const botonNuevoJuego = document.querySelector('#nuevoJuego');
const botonDesistir = document.querySelector('#desistir');
//Canvas
const contenerdorCanvas = document.querySelector('#canvas');
const canvas = contenerdorCanvas.getContext('2d');

//*Seccion nueva palabra
const contenedorNuevaPalabra = document.querySelector('#nuevaPalabra');
const botonGuardarPalabra = document.querySelector('#guardarPalabra');
const botonCancelar =  document.querySelector('#cancelar')

//*Lista inicial de palabras
const palabrasInicial = ['Cuento', 'Cucaracha', 'Pedestal', 'Monstruo', 'Novela', 'Escenario', 'Mono', 'Perro', 'Gato', 'Cafe', 'Agua', 'Asado', 'Vestido', 'Hotel', 'Casa', 'Mesa', 'Silla'];


//!Event listeners
//*Principal
botonIniciarJuego.addEventListener('click', () => {
    seccionPrincipal.style.display = 'none';
    seccionJuego.style.display = 'block';
});
botonAgregarPalabra.addEventListener('click', () => {
    seccionPrincipal.style.display = 'none';
    seccionNuevaPalabra.style.display = 'block';
});

//*Agregar Palabra
botonGuardarPalabra.addEventListener('click', () => {
    palabrasInicial.push(contenedorNuevaPalabra.value)
    // seccionNuevaPalabra.style.display = 'none';
    // seccionJuego.style.display = 'block';
});
botonCancelar.addEventListener('click', () => {
    seccionPrincipal.style.display = 'block';
    seccionNuevaPalabra.style.display = 'none';
});

//*Juego
// botonNuevoJuego.addEventListener('click', nuevoJuego);
// botonDesistir.addEventListener('click', pararJuego);

//*Selector random de palabras
function palabraRandom(palabras){
    let index = Math.floor(Math.random() * palabras.length);
    return palabras[index]
}

