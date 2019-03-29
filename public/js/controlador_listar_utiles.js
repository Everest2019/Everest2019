'use strict';
const tabla = document.querySelector('#tbl_utiles');
const input_filtro = document.querySelector('#txt_filtar');

let lista_utiles = listar_utiles();

let mostrar_datos = () => {
    
    for (let i = 0; i < lista_utiles.length; i++) {

        

            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];
        

    };
};
input_filtro.addEventListener('keyup', mostrar_datos);

mostrar_datos();