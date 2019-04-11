'use strict';

const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector('#txt_contrasena');
const boton_Ingresar = document.querySelector('#btn_iniciar');

let conectado = sessionStorage.getItem('conectado');
let tipo_Usuario = localStorage.getItem('tipo_usuario');

function obtener_Datos() {


    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

    let error_Blancos = validar(correo, contrasena);
    let usuario_Aceptado = false;

    if (!error_Blancos) {
        usuario_Aceptado = validar_credenciales(correo, contrasena);
        if (usuario_Aceptado.success == true) {
        }else{
            swal.fire({
                type: 'warning',
                title: 'El usuario no se encuentra registrado',
                text: 'Por favor registrese para poder iniciar sesión'
              });
        }
    }

};

function validar(pcorreo, pcontrasena) {
    let error = false;

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (pcontrasena == '') {
        error = true;
        input_contrasena.classList.add('error_input');
    } else {
        input_contrasena.classList.remove('error_input');
    }

    return error;
};


boton_Ingresar.addEventListener('click', obtener_Datos);
