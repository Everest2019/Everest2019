'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');
const input_filtro = document.querySelector('#txt_filtar');
const btn_agregar_etiquetas = document.querySelector('#btn_agregar');
let etiquetas = listar_etiquetas();

let mostrar_datos = ()=>{

    
    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for(let i = 0; i < etiquetas.length; i++){
        if (etiquetas[i]['accion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = etiquetas[i]['accion'];
            fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
// se crea una nueva celda para el boton de editar 
            let celda_configuaracion = fila.insertCell();

            //creacion del boton de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_etiquetas.html?id_etiquetas=${etiquetas[i]['_id']}`;

            celda_configuaracion.appendChild(boton_editar);
        }
    };
};


input_filtro.addEventListener('keyup', mostrar_datos);
btn_agregar_etiquetas.addEventListener('click', function(){
    window.location.href = './actualizar_etiquetas.html';
})
mostrar_datos();