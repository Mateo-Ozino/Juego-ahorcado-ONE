const contenedorNuevaPalabra = document.getElementById('nueva-palabra')
const botonNuevaPalabra = document.getElementById('boton-nueva-palabra')

const contenedorLetrasUsadas = document.getElementById('letras-usadas')
const contenedorLetrasCorrectas = document.getElementById('letras-correctas')

const contenerdorCanvas = document.getElementById('canvas');
const canvas = contenerdorCanvas.getContext('2d')


let palabrasInicial = ['Cuento', 'Cucaracha', 'Pedestal', 'Monstruo', 'Novela', 'Escenario', 'Mono', 'Perro', 'Gato', 'Cafe', 'Agua', 'Asado', 'Vestido', 'Hotel', 'Casa', 'Mesa', 'Silla']

function palabraRandom(palabras){
    let index = Math.floor(Math.random() * palabras.length);
    return palabras[index]
}

botonNuevaPalabra.addEventListener('click', () => {
    nuevaPalabra = contenedorNuevaPalabra.value
    palabrasInicial.append(nuevaPalabra)
})

console.log(palabraRandom(palabras))
