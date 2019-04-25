'use strict';

const tabla = document.querySelector('#tbl_comentario tbody');
const input_buscar = document.querySelector('#txt_buscar');
const boton_comentario = document.querySelector('#btn_agregar_comentario');


let comentarios = listar_comentarios();
mostrar_comentarios();

input_buscar.addEventListener('keyup', mostrar_comentarios);

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

function mostrar_comentarios() {

    const tabla = document.querySelector('#tbl_comentario    tbody');

    let centro_educativo = localStorage.getItem('id_usuario');
    let filtro = input_buscar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i]['id_centro_educativo'].includes(centro_educativo)) {
            if (comentarios[i]['comentario'].includes(filtro)) {
                let fila = tabla.insertRow();

                let celda_comentario = fila.insertCell();
                let celda_calificacion = fila.insertCell();

                celda_comentario.innerHTML = comentarios[i]['comentario'];
                celda_calificacion.innerHTML = comentarios[i]['calificacion'];


                let celda_configuracion = fila.insertCell();

                //botón de editar
                let boton_editar = document.createElement('a');
                boton_editar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
                boton_editar.href = `actualizar_comentarios.html?id=${comentarios[i]['_id']}`;


                celda_configuracion.appendChild(boton_editar);

                //boton eliminar
                let boton_eliminar = document.createElement('a');
                boton_eliminar.href = '#';
                boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
                boton_eliminar.dataset.id = comentarios[i]['_id'];

                boton_eliminar.addEventListener('click', confirmar_borrado);

                celda_configuracion.appendChild(boton_eliminar);
            }

        }
    }
}

function confirmar_borrado() {
    let id = this.dataset.id;
    Swal.fire({
        title: 'Está seguro que desea eliminar el comentario?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            eliminar_comentario(id);
            preguntas = listar_comentarios();
            mostrar_comentarios();
            Swal.fire(
                'Comentario eliminada!',
                'El comentario se elimino con éxito',
                'success'
            )
        }
    })
};

boton_comentario.addEventListener('click', function () {
    window.location.href = './registrar_comentarios.html';
})
