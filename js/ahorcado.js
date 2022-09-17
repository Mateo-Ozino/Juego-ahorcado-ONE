const regExp = /^[a-z !ñ]+$/;

const seccionJuego = document.querySelector('#seccionJuego');

//*Seccion juego
const contenedorLetrasUsadas = document.querySelector('#letrasUsadas');
const contenedorLetrasCorrectas = document.querySelector('#letrasCorrectas');
const contenedorPalabraCorrecta = document.querySelector('#palabraCorrecta')
const botonNuevoJuego = document.querySelector('#nuevoJuego');
const botonDesistir = document.querySelector('#desistir');

//*Seccion juego
botonNuevoJuego.addEventListener('click', () => {
    location.reload();
});
botonDesistir.addEventListener('click', () => {
    document.location.href = '../index.html'
});

//!Canvas
const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

function dibujarHorca() {
    ctx.fillStyle = '#462501';
    ctx.fillRect(64,9,26,237);
    ctx.fillRect(64,5,155,15);
    ctx.beginPath();
    ctx.moveTo(64,65);
    ctx.lineTo(64,80);
    ctx.lineTo(133,11);
    ctx.lineTo(118,11);
    ctx.fill();
    ctx.closePath();
}

function dibujarCabeza() {
    ctx.fillStyle = '#462501'
    ctx.beginPath();
    ctx.fillRect(190, 20, 5, 30);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.arc(192, 70, 19, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
}

function dibujarCuerpo() {
    ctx.lineWidth = 3.5;
    ctx.strokeRect(177, 90, 31, 65);
}

function dibujarBrazo(brazo) {
    if (brazo === 'izquierdo') {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(176.5, 100);
        ctx.lineTo(150, 140);
        ctx.stroke();
    } else if (brazo === 'derecho') {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(208, 100);
        ctx.lineTo(235, 140);
        ctx.stroke();
    }
}

function dibujarPierna(pierna) {
    if (pierna === 'izquierda') {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(186, 155);
        ctx.lineTo(165, 203);
        ctx.stroke();
    } else if (pierna === 'derecha') {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(199, 155);
        ctx.lineTo(220, 203);
        ctx.stroke();
    }
}

function dibujarOjos() {
    ctx.fillStyle = 'black';
    ctx.font = '800 13px Arial';
    ctx.fillText('X', 180, 72);
    ctx.fillText('X', 195, 72);
}

//*Dibujo la horca
dibujarHorca();

//!Juego
const maxIntentos = 6;
let letrasUsadas;
let intentos;
let aciertos;

//*Traigo la lista de palabras del local storage
let listaActualizada = JSON.parse(localStorage.getItem('lista'));

//*Selector random de palabras
const palabraRandom = () => {
    let palabra = listaActualizada[Math.floor((Math.random() * listaActualizada.length))];
    palabraSeleccionada = palabra.split('');
};

//*Funciones del juego
function crearGuiones(palabra) {
    for (let i = 0; i < palabra.length; i++) {
        contenedorLetrasCorrectas.innerHTML += `
        <div class="guion" id="letraInsertada${i}">
            <p></p>
        </div>
        `
    }
}

function juegoGanado() {
    document.removeEventListener('keydown', f);
    contenedorPalabraCorrecta.innerHTML = `
    <p>
        Ganaste🥳🥳
    </p>
    `
}

function juegoPerdido() {
    document.removeEventListener('keydown', f);
    contenedorPalabraCorrecta.innerHTML = `
    <p>
        Perdiste 😥. La palabra correcta era <strong>${palabraSeleccionada.join('').toUpperCase()}</strong>
    </p>
    `
}

function agregarLetraUsada() {
    contenedorLetrasUsadas.innerHTML = `
    ${letrasUsadas}
    `;
}

function comprobacion(letraIngresada, contenedoresLetras) {
    if (palabraSeleccionada.includes(letraIngresada)) {
        contenedoresLetras.forEach((contenedor) => {
            letras = contenedor.children;
            if (letras[0].innerHTML === letraIngresada) {
                letras[0].classList.toggle('hidden');
                aciertos++;
            }
        });
        if (aciertos === palabraSeleccionada.length) juegoGanado();
    } else {
        intentos++;
        switch (intentos) {
            case 1:
                dibujarCabeza();
                break;
            case 2:
                dibujarCuerpo();
                break;
            case 3:
                dibujarBrazo('izquierdo');
                break;
            case 4:
                dibujarBrazo('derecho');
                break;
            case 5:
                dibujarPierna('izquierda');
                break;
            case 6:
                dibujarPierna('derecha');
                dibujarOjos();
            default:
                break;
        }
        if (intentos === maxIntentos) juegoPerdido();
    }
    letrasUsadas.push(letraIngresada);
    agregarLetraUsada(letraIngresada);
}

function ingresoLetra(e, contenedoresLetras) {
    let letraIngresada = e.key;
    if (letraIngresada.match(regExp) && !letrasUsadas.includes(letraIngresada)) {
        comprobacion(letraIngresada, contenedoresLetras);
    }
}

//*Funcion principal
function juego() {
    intentos = 0;
    aciertos = 0;
    letrasUsadas = [];
    palabraRandom();
    crearGuiones(palabraSeleccionada);
    let contenedoresLetras = document.querySelectorAll('.guion');
    contenedoresLetras.forEach((contenedor, i) => {
        letras = contenedor.children;
        letras[0].innerHTML = palabraSeleccionada[i];
        letras[0].classList.toggle('hidden');
    })
    document.addEventListener('keydown', f = (e) => {
        ingresoLetra(e, contenedoresLetras);
    });
}

juego() 
