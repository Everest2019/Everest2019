'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_informacion = document.querySelector('#txt_informacion');
const boton_registrar = document.querySelector('#boton_registrar');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_informacion.value == '') {
        error = true;
        input_informacion.classList.add('error_input');
    } else {
        input_informacion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = input_nombre.value;
        let informacion = input_informacion.value;

        registrar(nombre, informacion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo registrar',
            text: 'Por favor revise los campos resaltados'
        });
    }
};
boton_registrar.addEventListener('click', obtener_datos);