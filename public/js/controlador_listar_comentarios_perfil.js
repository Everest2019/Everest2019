'use strict';

const tabla = document.querySelector('#tbl_comentario tbody');
const input_buscar = document.querySelector('#txt_buscar');
const boton_comentario = document.querySelector('#btn_agregar_comentario');


let comentarios = listar_comentarios();


input_buscar.addEventListener('keyup', mostrar_comentarios);

let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

function mostrar_comentarios() {

    let filtro = input_buscar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i]['id_centro_educativo'].includes(id_centro_educativo)) {
            if (comentarios[i]['comentario'].includes(filtro)) {
                let fila = tabla.insertRow();

                let celda_comentario = fila.insertCell();
                let celda_calificacion = fila.insertCell();

                celda_comentario.innerHTML = comentarios[i]['comentario'];
                celda_calificacion.innerHTML = comentarios[i]['calificacion'];


                let celda_configuracion = fila.insertCell();

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
            Swal.fire({
                title:'Comentario eliminado',
                text:'El comentario fue borrado con éxito',
               type: 'success'
              })
            comentarios = listar_comentarios();
            mostrar_comentarios();
            
        }
    })
};

boton_comentario.addEventListener('click', function () { window.location.href = './registrar_comentarios.html';
});
mostrar_comentarios();