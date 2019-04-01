'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_filtrar_noticia');
const nombre = document.querySelector('#nombre_ce');
const crear_actividad = document.querySelector('#btn_agregar_actividad');


let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let mostrar_datos = () =>{
    tabla.innerHTML = '';
    let actividades = listar_actividades ();
    let id_usuario = localStorage.getItem('id_usuario');
    let filtro = input_Filtro.value;
    for (let i = 0; i < actividades.length; i++) {
        if (actividades[i]['id_centro_educativo'].includes(id_usuario)){
            if (actividades[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = actividades[i]['titulo'];
                
                let fecha = new Date(actividades[i]['fecha']);
                fecha = fecha.toLocaleDateString();
                fila.insertCell().innerHTML = fecha;
                fila.insertCell().innerHTML = actividades[i]['descripcion'];
        }
    };
};
};

let actividad = () =>{
    window.location.href = './registrar_actividad.html';
}

mostrar_datos();
crear_actividad.addEventListener('click', actividad);
input_Filtro.addEventListener('keyup', mostrar_datos);