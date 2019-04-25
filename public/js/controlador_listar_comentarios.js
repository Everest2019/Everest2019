'use strict';

const tabla = document.querySelector('#tbl_comentario tbody');
const input_buscar = document.querySelector('#txt_buscar');


let comentarios = listar_comentarios();

let mostrar_comentarios = () => {
    let filtro = input_buscar.value;
    tabla.innerHTML = '';

    for (let i = 0; i < comentarios.length; i++) {

                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = comentarios[i]['comentario'];
                fila.insertCell().innerHTML = comentarios[i]['calificacion'];


            }
        }

mostrar_comentarios();