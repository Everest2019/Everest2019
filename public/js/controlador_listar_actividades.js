'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_Filtro');

let mostrar_datos = () =>{
    let actividades = listar_actividades ();

    for(let i=0; i<actividades.length; i++){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = actividades[i]['titulo'];
        fila.insertCell().innerHTML = actividades[i]['fecha'];
        fila.insertCell().innerHTML = actividades[i]['descripcion'];
    };
};

mostrar_datos();
