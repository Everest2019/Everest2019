'use strict';

const input_fecha = document.querySelector('#input_fecha');
const input_hora = document.querySelector('#input_hora');
const input_comentario = document.querySelector('#txt_comentario');
const boton_registrar = document.querySelector('#btn_enviar');

document.querySelector("#input_fecha").valueAsDate = new Date();

let id_centro_educativo = localStorage.getItem('centro_educativo');
let id_padre_familia = localStorage.getItem('id_usuario');
let padre_familia = buscar_padre_familia(id_padre_familia);
let nombre_usuario = padre_familia['primer_nombre'] + ' ' + padre_familia['primer_apellido'];

let validar = () => {

    let error = false;

    let dia_cita = new Date(input_fecha.value).getDay();
    let fecha_cita = new Date(input_fecha.value).getDate();
    let mes_cita = new Date(input_fecha.value).getMonth();
    let ano_cita = new Date(input_fecha.value).getFullYear();


    let fecha_actual = new Date();
    let dia_actual = fecha_actual.getDate();
    let mes_actual = fecha_actual.getMonth();
    let ano_actual = fecha_actual.getFullYear();


    if (input_fecha.value == '' ) {
        error = true;
        input_fecha.classList.remove('borde');
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
        input_fecha.classList.add('borde');
    }

    if (input_hora.value == '') {
        error = true;
        input_hora.classList.remove('borde');
        input_hora.classList.add('error_input');
    } else {
        input_hora.classList.remove('error_input');
        input_hora.classList.add('borde');
    }


    if((dia_cita == 5 || dia_cita == 6) || (ano_cita < fecha_actual.getFullYear()) || ((mes_cita < mes_actual) && (ano_actual == ano_cita)) || ((mes_cita == mes_actual) && (ano_actual == ano_cita) && (fecha_cita < dia_actual))){
        error = true;
        input_fecha.classList.remove('borde');
        input_fecha.classList.add('error_input');
    }
    else{
        input_fecha.classList.remove('error_input');
        input_fecha.classList.add('borde');
    }


    return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        let centro_educativo = id_centro_educativo;
        let fecha = input_fecha.value;
        let hora = input_hora.value;
        let comentario = input_comentario.value;

        registrar_cita(centro_educativo, id_padre_familia ,fecha, hora, comentario, nombre_usuario);

    }
    else {

        swal.fire({
            type: 'warning',
            title: 'No se ha podido agendar la cita',
            text: 'Por favor revise los campos resaltados'
        });
    }
};


boton_registrar.addEventListener('click', obtener_datos);
