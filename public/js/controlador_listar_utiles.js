'use strict';
const tabla = document.querySelector('#tbl_utiles');
let lista_utiles = listar_utiles();

let mostrar_datos =()=>{
    for(let i=0; i<lista_utiles.length;i++){
        let fila =tabla.insertRow();

        fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
        fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];
    };
};

mostrar_datos();