'use strict';
const botonCerrarSesion = document.querySelector('#btn_cerrar_sesion');

function cerrar_sesion(){
    localStorage.clear();
    window.location.href = 'iniciar_sesion2.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);