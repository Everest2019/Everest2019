'use strict';

const tabla = document.querySelector('#tbl_comentario tbody');
const input_buscar = document.querySelector('#txt_buscar');

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

let comentarios = listar_comentarios();

let mostrar_comentarios = () => {
    let filtro = input_buscar.value;
    tabla.innerHTML = '';

    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i]['id_centro_educativo'].includes(id_centro_educativo)) {
            if (comentarios[i]['comentario'].toLowerCase().includes(filtro.toLowerCase())) {

                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = comentarios[i]['comentario'];
                fila.insertCell().innerHTML = comentarios[i]['calificacion'];


            }
        }

    }
}
mostrar_comentarios();
input_buscar.addEventListener('keyup',mostrar_comentarios);