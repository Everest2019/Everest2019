'use strict';


let etiquetas = listar_etiquetas();

let boton_agregar_etiquetas = document.querySelector('#btn_agregar');
const tabla = document.querySelector('#tbl_etiquetas tbody');
const input_filtro = document.querySelector('#txt_filtar');


let mostrar_datos = () => {
    let filtro = input_filtro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < etiquetas.length; i++) {
        if (etiquetas[i]['accion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = etiquetas[i]['accion'];
            fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
            // se crea una nueva celda para el boton de editar
            let celda_configuaracion = fila.insertCell();

            //creacion del boton de editar
            //let boton = document.createElement('button');
            let boton_asignar = document.createElement('input');
            boton_asignar.type = 'checkbox';
            boton_asignar.value = etiquetas[i]['accion'];// debo sacar el id (en mongo )de esa etiqueta

            boton_asignar.name = etiquetas[i]['descripcion'];

            celda_configuaracion.appendChild(boton_asignar);


        }
    };
};
mostrar_datos();
