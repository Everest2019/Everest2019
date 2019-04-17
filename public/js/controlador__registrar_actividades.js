'use strict';

const input_titulo = document.querySelector('#txt_titulo');
const input_fecha = document.querySelector('#dt_fecha');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_registrar = document.querySelector('#btn_registrar');

let id_centro_educativo = localStorage.getItem('id_usuario');

let validar = () => {
    let error = false;

    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }   
    if(input_fecha.value == ''){
        error = true;
        input_fecha.classList.add('error_input');
    }else{
        input_fecha.classList.remove('error_input');
    }
    if(input_descripcion.value == ''){
        error = true;
        input_descripcion.classList.add('error_input');
    }else{
        input_descripcion.classList.remove('error_input')
    }
    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let centro_educativo = id_centro_educativo;
        let titulo = input_titulo.value;
        let fecha = input_fecha.value;
        let descripcion = input_descripcion.value;

        registrar_actividades(id_centro_educativo,titulo, fecha, descripcion);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La actividad no fue registrada'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);