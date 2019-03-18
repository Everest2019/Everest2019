'use strict';
const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector('#txt_contrasena');
const input_confirmar_contrasena = document.querySelector('#txt_confirmar_contrasena');
const boton_enviar = document.querySelector('#boton_enviar');

let validar = () => {
    let error = false;

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (input_contrasena.value == '') {
        error = true;
        input_contrasena.classList.add('error_input');
    } else {
        input_contrasena.classList.remove('error_input');
    }

    if (input_confirmar_contrasena.value == '') {
        error = true;
        input_confirmar_contrasena.classList.add('error_input');
    } else {
        input_confirmar_contrasena.classList.remove('error_input');
    }

    return error;

};
let obtener_datos = () => {

    if(input_contrasena == input_confirmar_contrasena) {
        let contrasenna = input_contrasena.value;
        let confirmar_contrasena = input_confirmar_contrasena.value;

        contrasena( contrasenna, confirmar_contrasena);
    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo crear',
            text: 'Revise que sus contraseñas coincidan'
        })
    }
    };

boton_enviar.addEventListener('click', obtener_datos);