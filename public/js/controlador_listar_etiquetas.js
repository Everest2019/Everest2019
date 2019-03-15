'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');
let mostrar_datos = ()=>{
    let etiquetas = listar_etiquetas();

    for(let i = 0; i < etiquetas.length; i++){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = etiquetas[i][Etiquetas];
    };
};



mostrar_datos();