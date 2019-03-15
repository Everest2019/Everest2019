'use strict';

const tabla = document.querySelector('#tbl_registrar tbody');

let mostrar_datos = () => {
    let listar_registro=listar();

    for (let i=0; i<listar_registro.length; i++){
        let fila = tabla.insertRow();
        
        fila.insertCell().innerHTML = listar_registro[i]['nombre'];
        fila.insertCell().innerHTML=listar_registro[i]['informacion'];
    };
};

mostrar_datos();