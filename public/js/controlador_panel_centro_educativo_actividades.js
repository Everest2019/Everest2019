'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_filtro');
const nombre = document.querySelector('#nombre_ce');
const a_regresar = document.querySelector('#a_regresar');


let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let mostrar_datos = () =>{
    let actividades = listar_actividades ();
   
    for (let i = 0; i < actividades.length; i++) {
        if (actividades[i]['id_centro_educativo'].includes(id_centro_educativo)){
            centro_educativo = buscar_centro_educativo(actividades[i]['id_centro_educativo']);
            let fila = tabla.insertRow();

        fila.insertCell().innerHTML = actividades[i]['titulo'];
        
        let fecha = new Date(actividades[i]['fecha']);
        fecha = fecha.toLocaleDateString();
        fila.insertCell().innerHTML = fecha;
        fila.insertCell().innerHTML = actividades[i]['descripcion'];
    };
};
};

mostrar_datos();
