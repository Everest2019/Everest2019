'use strict';

const tabla = document.querySelector('#tbl_registrar tbody');

let mostrar_datos = () => {
    let preferencia=listar_preferencias();

    for (let i=0; i<preferencia.length; i++){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = preferencia[i]['nombre'];
        fila.insertCell().innerHTML=preferencia[i]['informacion'];
    };
};

mostrar_datos();
