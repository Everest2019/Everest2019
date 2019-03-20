'use strict';

const tabla = document.querySelector('#tbl_articulo tbody');

let mostrar_datos = () => {
    let listar_articulo = listar();
    for (let i = 0; i < listar_articulo.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = listar_articulo[i]['nombre'];
        fila.insertCell().innerHTML = listar_articulo[i]['descripcion'];

    };
};
mostrar_datos();
