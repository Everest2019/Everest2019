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
        }
    };
};


input_filtro.addEventListener('keyup', mostrar_datos);
btn_agregar_etiquetas.addEventListener('click', function(){
    window.location.href = './registrar_etiquetas.html';
})
mostrar_datos();