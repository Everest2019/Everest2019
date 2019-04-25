'use strict';

const input_comentario = document.querySelector('#txt_comentario');
const fieldset_calificacion = document.querySelector('#fieldset_calificacion');
const boton_enviar = document.querySelector('#btn_enviar');

let id_centro_educativo = localStorage.getItem('centro_educativo');
let id_padre_familia = localStorage.getItem('id_usuario');

let validar = () => {
    let error = false;
    let calificicacion = document.querySelector('#fieldset_calificacion input[type=radio]:checked');

    if (input_comentario.value == '') {
        error = true;
        input_comentario.classList.remove('borde');
        input_comentario.classList.add('error_input');
    } else {
        input_comentario.classList.remove('error_input');
        input_comentario.classList.add('borde');
    }

    if (calificicacion == null) {
        error = true,
        fieldset_calificacion.classList.remove('borde');
        fieldset_calificacion.classList.add('error_input');
    } else {
        fieldset_calificacion.classList.remove('error_input');
        fieldset_calificacion.classList.add('borde');
    }

    return error;
};

let obtener_comentarios = () => {
    if (validar() == false) {

        let centro_educativo = id_centro_educativo;
        let comentario = input_comentario.value;
        let calificacion = document.querySelector('#fieldset_calificacion input[type=radio]:checked').value;

        registrar_comentario( id_centro_educativo, comentario, calificacion,id_padre_familia);
        swal.fire(
            {
                type: 'success',
                title: 'Comentario registrado con éxito',
            }
        );
        input_comentario.value = '';
        fieldset_calificacion.value = '';
    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            Text: 'Revise los campos resaltados'
        });
    }
};

boton_enviar.addEventListener('click', obtener_comentarios);