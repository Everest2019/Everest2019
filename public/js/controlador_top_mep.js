'use strict';

const input_filtrar = document.querySelector('#txt_filtrar');
const tabla = document.querySelector('#tbl_top tbody');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario == 'centro_educativo') {
    window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones_top_mep();

function mostrar_datos() {
    tabla.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        
            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = i+1;
            
            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.innerHTML = i+1;
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

        
    };
};

mostrar_datos();

