'use strict';
const nombre = document.querySelector('#nombre_ce');
const telefono = document.querySelector('#telefono');
const direccion_exacta = document.querySelector('#direccion_exacta');
const direccion_distrito = document.querySelector('#direccion_distrito');
const direccion_canton = document.querySelector('#direccion_canton');
const direccion_provincia = document.querySelector('#direccion_provincia');
const latitud_centro_educativo = document.querySelector('#lat_centro_educativo');
const longitud_centro_educativo = document.querySelector('#lng_centro_educativo');

let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];
direccion_exacta.innerHTML = centro_educativo['direccion_exacta'];
direccion_distrito.innerHTML = centro_educativo['distrito'];
direccion_canton.innerHTML = centro_educativo['canton'];
direccion_provincia.innerHTML = centro_educativo['provincia'];
latitud_centro_educativo.value = centro_educativo['ubicacion_mapa_lat'];
longitud_centro_educativo.value = centro_educativo['ubicacion_mapa_lng'];


a_regresar.addEventListener('click', function(){
    if(localStorage.getItem('tipo_usuario') == 'administrador'){
        window.location.href = './panel_administrador_instituciones.html';
    }
    else{
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');