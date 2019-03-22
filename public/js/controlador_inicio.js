'use strict';

const inputcorreo = document.querySelector('#txtcorreo');
const inputcontrasena = document.querySelector('#txtcontrasena');
const botonIngresar = document.querySelector('#btnIngresar');

function obtenerDatos(){
    let correo = inputcorreo.value;
    let contrasena = inputcontrasena.value;

    let errorBlancos = validar(correo, contrasena);
    let usuarioAceptado = false;

    if(!errorBlancos){
        usuarioAceptado = validar_credenciales(correo, contrasena);
        if(usuarioAceptado){
            window.location.href = 'registrar_preferencia.html';
        }
    }
};

function validar(pcorreo, pcontrasena){
    let error = false;

    if(pcorreo == ''){
        error = true;
        inputcorreo.classList.add('error_input');
    }else{
        inputcorreo.classList.remove('error_input');
    }

    if(pcontrasena == ''){
        error = true;
        inputcontrasena.classList.add('error_input');
    }else{
        inputcontrasena.classList.remove('error_input');
    }

    return error;
};

botonIngresar.addEventListener('click', obtenerDatos);
