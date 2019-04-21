'use strict';

let agregarItem = document.querySelector('#agregarItem');
let listUtiles = document.querySelector('#list-utiles');
let arrayUtil = [];

agregarItem.addEventListener('click', agregarItemLista);

// Añade el útil a la lista visual
function agregarItemLista() {
    // Añadir útil al arreglo
    let util = [];
    util.push(input_articulo.value);
    util.push(input_cantidad.value);
    util.push(input_descripcion.value);
    arrayUtil.push(util);

    let itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');
    itemWrapper.addEventListener('click', eliminarItemLista);

    let pItemName = document.createElement('p');
    pItemName.innerText = input_articulo.value + ' (' + input_cantidad.value + ')';
    pItemName.classList.add('item-name');

    itemWrapper.appendChild(pItemName);
    listUtiles.appendChild(itemWrapper);
}

// Elimina el útil de la lista visual
function eliminarItemLista() {
    this.parentNode.removeChild(this);
    eliminarItemListaArreglo(this.childNodes[0].innerText.split(' ')[0]);
}

// Elimina el útil del arreglo
function eliminarItemListaArreglo(utilNombre) {
    for (let i = 0; i < arrayUtil.length; i++) {
        if (arrayUtil[i][0] == utilNombre) {
            arrayUtil.splice(i, 1);
        }
    }
}

function mostrarItemLista() {
    for (let i = 0; i < arrayUtil.length; i++) {
        console.log('Útil: ' + arrayUtil[i][0]);
        console.log('Cantidad: ' + arrayUtil[i][1]);
        console.log('Descripción: ' + arrayUtil[i][2]);
        console.log('-------------');
    }
}


