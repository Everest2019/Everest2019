'use strict';

const input_fecha = document.querySelector('#input_fecha');
const input_hora = document.querySelector('#input_hora');
const input_comentario = document.querySelector('#txt_comentario');
const boton_registrar = document.querySelector('#btn_enviar');

document.querySelector("#input_fecha").valueAsDate = new Date();

let id_centro_educativo = localStorage.getItem('centro_educativo');
let id_padre_familia = 'a57qwe56315qwe';

let validar = () => {

    let error = false;

    if (input_fecha.value == '') {
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

    

    return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        let centro_educativo = id_centro_educativo;
        let padre_familia = id_padre_familia;
        let fecha = input_fecha.value;
        let hora = input_hora.value;
        let comentario = input_comentario.value;

        registrar_cita(centro_educativo, padre_familia ,fecha, hora, comentario);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'No se ha podido agendar la cita',
            text: 'Por favor revise los campos resaltados'
        });
    }
};


boton_registrar.addEventListener('click', obtener_datos);