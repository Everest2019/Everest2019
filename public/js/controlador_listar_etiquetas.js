'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');
let etiquetas = listar_etiquetas();

let mostrar_datos = ()=>{
    

    for(let i = 0; i < etiquetas.length; i++){
        let fila = tabla.insertRow();

        let dato = fila.insertCell;
        dato.innerHTML = etiquetas[i].accion;

        fila.insertCell().innerHTML = etiquetas[i]['accion'];
        fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
    };
};



mostrar_datos();