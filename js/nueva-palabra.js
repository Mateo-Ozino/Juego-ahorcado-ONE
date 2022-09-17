//*Seccion nueva palabra
const contenedorNuevaPalabra = document.querySelector('#nuevaPalabra');
const botonGuardarPalabra = document.querySelector('#guardarPalabra');
const botonCancelar =  document.querySelector('#cancelar')
const contenedorPalabras =  document.querySelector('#contenedorPalabras')
const seccionIngresoPalabra = document.querySelector('#seccionIngresoPalabra')
const seccionListaPalabras = document.querySelector('#seccionListaPalabras');

//*Agregar Palabra
botonGuardarPalabra.addEventListener('click', () => {
    nuevaPalabra = contenedorNuevaPalabra.value
    if (!localStorage.getItem('lista').includes(nuevaPalabra)) {
        lista = JSON.parse(localStorage.getItem('lista')).concat([nuevaPalabra.toLowerCase()]);
        localStorage.setItem('lista', JSON.stringify(lista));
        location.reload();
    } else {
        let aviso =  document.createElement('p');
        aviso.innerHTML = `
        <p>La palabra que ingresaste ya se encuentra en la lista. Por favor ingresa otra.</p>
        `;
        seccionIngresoPalabra.appendChild(aviso);
    }
});

botonCancelar.addEventListener('click', () => {
    document.location.href = '../index.html'
});

//*Seccion Agregar palabra
let listaActualizada = JSON.parse(localStorage.getItem('lista'))
console.log(listaActualizada)

// let listaDom = document.createElement('p');
// seccionListaPalabras.appendChild(listaDom);
// listaDom.innerHTML = `
// <p>${listaActualizada}</p>
// `;

listaActualizada.forEach(element => {
    contenedorPalabras.innerHTML += `
    <p>${element.toUpperCase()}</p>
    `;
});

// contenedorPalabras.innerHTML = `
//     <p>${listaActualizada}</p>
// `
