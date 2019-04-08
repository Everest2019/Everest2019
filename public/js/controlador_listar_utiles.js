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

            fila.insertCell().innerHTML = lista_utiles[i]['articulo'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];
            
            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_1'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_1'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_1'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_2'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_2'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_2'];

            /******************************************************** */

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_3'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_3'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_3'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_4'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_4'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_4'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_5'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_5'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_5'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_6'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_6'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_6'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_7'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_7'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_7'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_8'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_8'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_8'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_9'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_9'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_9'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_10'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_10'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_10'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_11'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_11'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_11'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_12'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_12'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_12'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_13'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_13'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_13'];

            fila = tabla.insertRow();
            fila.insertCell().innerHTML = lista_utiles[i]['articulo_14'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad_14'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion_14'];

            

        }

    };
};