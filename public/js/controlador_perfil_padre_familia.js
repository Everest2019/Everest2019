'use strict';
const nombre = document.querySelector('#contenedor_info_nombre');
const identificacion = document.querySelector('#contenedor_info_id');
const provincia = document.querySelector('#contenedor_info_provincia');
const canton = document.querySelector('#contenedor_info_canton');
const distrito = document.querySelector('#contenedor_info_distrito');
const telefono = document.querySelector('#contenedor_info_telefono');
const correo = document.querySelector('#contenedor_info_correo');
const foto = document.querySelector('#foto_perfil')
    ;
const btn_modificar = document.querySelector('#btn_modificar');

let id_padre_familia = localStorage.getItem('id_usuario');

let padre_familia = buscar_padre_familia(id_padre_familia);

if (padre_familia['segundo_nombre'] == undefined) {
    nombre.innerHTML += padre_familia['primer_nombre'] + " " + padre_familia['primer_apellido'] + " " + padre_familia['segundo_apellido'];
}
else if (padre_familia['segundo_nombre'] == undefined && padre_familia['segundo_apellido'] == undefined) {
    nombre.innerHTML += padre_familia['primer_nombre'] + " " + padre_familia['primer_apellido'];
}
else {
    nombre.innerHTML += padre_familia['primer_nombre'] + " " + padre_familia['segundo_nombre'] + " " + padre_familia['primer_apellido'] + " " + padre_familia['segundo_apellido'] + " ";
}

identificacion.innerHTML += padre_familia['identificacion'] + ", " + padre_familia['tipo_identificacion'] + " ";
provincia.innerHTML += padre_familia['provincia'] + ", " + padre_familia['canton'];


if (padre_familia['telefono'] != undefined) {
    telefono.innerHTML += padre_familia['telefono'];
}
correo.innerHTML += padre_familia['correo'];

if (padre_familia['foto_perfil']) {
    foto.src = padre_familia['foto_perfil'];
} else {
    foto.src = 'img/user_icon.png';
}




btn_modificar.addEventListener('click', function () {
    window.location.href = './actualizar_perfil_padre_familia.html';
})