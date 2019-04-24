'use strict';

const codigo_verificacion = document.querySelector('#txt_codigo');
const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector('#txt_contrasena');
const verificar_contrasena = document.querySelector('#txt_contrasena2');
const boton_Ingresar = document.querySelector('#btn_iniciar');


function obtener_Datos() {

    if (!validar()) {

        let correo = input_correo.value;
        let codigo = codigo_verificacion.value;
        let contrasena = input_contrasena.value;

         let usuario_Aceptado = agregar_contrasena(correo, codigo, contrasena);
        if (usuario_Aceptado.success == true) {
        }else{
            swal.fire({
                type: 'warning',
                title: 'Datos incorrectos',
                text: 'El correo no coincide con el código de verificación'
              });
        }
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Verifique los campos',
            text: 'Por favor revise los espacios resaltados'
        })
    }

};

function validar() {
    let error = false;

    if (codigo_verificacion.value == '') {
        error = true;
        codigo_verificacion.classList.remove('borde');
        codigo_verificacion.classList.add('error_input');
    } else {
        codigo_verificacion.classList.remove('error_input');
        codigo_verificacion.classList.add('borde');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.remove('borde');
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
        input_correo.classList.add('borde');
    }

    if (input_contrasena.value == '') {
        error = true;
        input_contrasena.classList.remove('borde');
        input_contrasena.classList.add('error_input');
    } else {
        input_contrasena.classList.remove('error_input');
        input_contrasena.classList.add('borde');
    }

    if (verificar_contrasena.value == '') {
        error = true;
        verificar_contrasena.classList.remove('borde');
        verificar_contrasena.classList.add('error_input');
    } else {
        verificar_contrasena.classList.remove('error_input');
        verificar_contrasena.classList.add('borde');
    }

    if (verificar_contrasena.value != input_contrasena.value) {
        error = true;
        input_contrasena.classList.remove('borde');
        input_contrasena.classList.add('error_input');
        verificar_contrasena.classList.remove('borde');
        verificar_contrasena.classList.add('error_input');
    } else {
        verificar_contrasena.classList.remove('error_input');
        verificar_contrasena.classList.add('borde');
        input_contrasena.classList.remove('error_input');
        input_contrasena.classList.add('borde');
    }

    return error;
};


boton_Ingresar.addEventListener('click', obtener_Datos);
