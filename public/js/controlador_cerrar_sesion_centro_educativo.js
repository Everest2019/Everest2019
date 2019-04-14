'use strict';


const botonCerrarSesion = document.querySelector('#btn_cerrar_sesion');

//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

function cerrar_sesion(){
    localStorage.clear();
    window.location.href = 'Iniciar_sesion.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);