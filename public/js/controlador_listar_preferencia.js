'use strict';

const tabla = document.querySelector('#tbl_preferencia tbody');
const input_filtro = document.querySelector('#txt_filtar')

const btn_agregar_preferencia = document.querySelector('#btn_agregar');
let preferencia=listar_preferencias();

mostrar_datos();
input_filtro.addEventListener('keyup', mostrar_datos);

btn_agregar_preferencia.addEventListener('click', function () {
    window.location.href = './registrar_preferencia.html';
})


function mostrar_datos() {




    let filtro = input_filtro.value;

   tabla.innerHTML ='';


    for(let i = 0 ; i< preferencia.length; i++){
        if(preferencia[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = preferencia[i]['nombre'];
            fila.insertCell().innerHTML = preferencia[i]['informacion'];
        }
    };
};

