'use strict';


const botonCerrarSesion = document.querySelector('#btn_cerrar_sesion');


function cerrar_sesion(){
    localStorage.clear();
    window.location.href = 'Iniciar_sesion.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);