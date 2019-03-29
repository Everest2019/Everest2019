'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_agregar = document.querySelector('#btn_agregar');

let id_centro_educativo = localStorage.getItem('centro_educativo');


let validar = () => {
    let error = false;

    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
 
    if (input_respuesta.value == '') {
        error = true;
        input_respuesta.classList.add('error_input');
    } else {
        input_respuesta.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let centro_educativo = id_centro_educativo;
        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;

        registrar_pregunta(centro_educativo,pregunta, respuesta)

    } else {
        swal.fire({
            type: 'warning',
            title: 'La pregunta no fue registrada'
        });
    }

};

boton_agregar.addEventListener('click', obtener_datos);