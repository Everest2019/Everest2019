'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_agregar = document.querySelector('#btn_agregar');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);

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
        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;

        registrar_pregunta(id_centro_educativo,pregunta, respuesta, centro_educativo['nombre_comercial']);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La pregunta no fue registrada',
            text: `Revise los campos resaltados`
        });
    }

};

boton_agregar.addEventListener('click', obtener_datos);