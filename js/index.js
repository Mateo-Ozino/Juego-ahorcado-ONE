//*Seccion principal
const botonIniciarJuego = document.querySelector('#iniciarJuego');
const botonAgregarPalabra = document.querySelector('#agregarPalabra');

//*Lista inicial de palabras
const listaPalabras = ['cuento', 'pedestal', 'monstruo', 'novela', 'mono', 'perro', 'gato', 'cafe', 'agua', 'asado', 'vestido', 'hotel', 'casa', 'mesa', 'silla'];

//*Si no existe la lista en el local storage, la guardo. Esto es para inicializar la lista en cualquier dispositivo
if (!localStorage.getItem('lista')) {
    localStorage.setItem('lista', JSON.stringify(listaPalabras))
}

//!Event listeners
//*Principal
botonIniciarJuego.addEventListener('click', () => {
    document.location.href = 'pages/ahorcado.html'
});

botonAgregarPalabra.addEventListener('click', () => {
    document.location.href = 'pages/nueva-palabra.html'
});
