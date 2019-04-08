'use strict';

const input_nombre = document.querySelector('#txt_nombre_articulo');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_registrar = document.querySelector('#boton_registrar');
const input_filtro = document.querySelector('#txt_buscar');

let validar = () => {
    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;

        registrar_articulo(nombre, descripcion)
    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo registrar',
            text: 'No ha hecho ningina acción'
        });
    }
    input_nombre.value = '';
    input_descripcion.value = '';
};
boton_registrar.addEventListener('click', obtener_datos);