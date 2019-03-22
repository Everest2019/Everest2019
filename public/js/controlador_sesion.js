'use strict';
const botonCerrarSesion = document.querySelector('#btn_cerrar_sesion');

function cerrar_sesion(){
    sessionStorage.clear();
    window.location.href = 'index.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);