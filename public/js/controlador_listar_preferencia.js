'use strict';

const tabla = document.querySelector('#tbl_registrar tbody');

let mostrar_datos = () => {
    let preferencia=listar_preferencia();

    for (let i=0; i<listar_preferencia.length; i++){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = preferencia[i]['nombre'];
        fila.insertCell().innerHTML=preferencia[i]['informacion'];
    };
};

mostrar_datos();
