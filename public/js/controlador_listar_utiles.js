'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');
const input_filtro = document.querySelector('#txt_filtar')


mostrar_datos();
input_filtro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
    
    let tipoUsuario = localStorage.getItem("tipo_usuario");

    let lista_utiles = listar_utiles();

    if (tipoUsuario == "padre_familia") {
        document.getElementById("registrar_lista_utiles").style.display = "none";
    }
    
    
    let filtro = input_filtro.value;

    tabla.innerHTML = '';
    for (let i = 0; i < lista_utiles.length; i++) {
        if (lista_utiles[i]['articulo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();
           //console.log(lista_utiles.length);


            fila.insertCell().innerHTML = lista_utiles[i]['articulo'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];
            
           // fila.insertcell().innerHTML = lista_utiles[i]['articulo_1'];
            //fila.insertCell().innerHTML = lista_utiles[i]['cantidad_1'];
            //fila.insertCell().innerHTML = lista_utiles[i]['descripcion_1'];

        }

    };
};