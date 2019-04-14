'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_filtrar_noticia');
const nombre = document.querySelector('#nombre_ce');
const crear_actividad = document.querySelector('#btn_agregar_actividad');
const modificar_actividades = document.querySelector('#btn_modificar_actividad');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

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
    window.location.href = './agregar_actividades.html';
}


modificar_actividades.addEventListener('click',function(){
    window.location.href = './actualizar_actividades.html';
})

mostrar_datos();
crear_actividad.addEventListener('click', actividad);
input_Filtro.addEventListener('keyup', mostrar_datos);