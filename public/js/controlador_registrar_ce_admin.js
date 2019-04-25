'use strict';

const boton_agregar = document.querySelector('#btn_registrar_ce');

//boton_agregar.addEventListener('click',registrar_ce);

let registrar_ce = ()=>{
    window.location.href = 'registrar_centro_educativo.html';
};

boton_agregar.addEventListener('click', registrar_ce);