//*Elemntos del DOM
const contenedorNuevaPalabra = document.querySelector('#nuevaPalabra');
const botonGuardarPalabra = document.querySelector('#guardarPalabra');
const botonCancelar =  document.querySelector('#cancelar')
const contenedorPalabras =  document.querySelector('#contenedorPalabras')
const seccionIngresoPalabra = document.querySelector('#seccionIngresoPalabra')
const seccionListaPalabras = document.querySelector('#seccionListaPalabras');

//*Event Listeners
botonGuardarPalabra.addEventListener('click', () => {
    //Esta arrow function se va a encargar de manejar el ingreso de nuevas palabras
    //Esta funcionalidad se lleva a cabo con el local storage
    nuevaPalabra = contenedorNuevaPalabra.value
    if (!localStorage.getItem('lista').includes(nuevaPalabra)) {
        lista = JSON.parse(localStorage.getItem('lista')).concat([nuevaPalabra.toLowerCase()]);
        localStorage.setItem('lista', JSON.stringify(lista));
        location.reload();
    } else {
        let aviso =  document.createElement('p');
        aviso.innerHTML = `
        La palabra que ingresaste ya se encuentra en la lista. Por favor ingresa otra.
        `;
        seccionIngresoPalabra.appendChild(aviso);
    }
});

botonCancelar.addEventListener('click', () => {
    document.location.href = '../index.html'
});

//Traigo la lista del local storage y la asigno a una variable
let listaActualizada = JSON.parse(localStorage.getItem('lista'))

listaActualizada.forEach(element => {
    contenedorPalabras.innerHTML += `
    <p>${element.toUpperCase()}</p>
    `;
});

