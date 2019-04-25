'use strict';

const input_filtrar = document.querySelector('#txt_filtrar');
const tabla = document.querySelector('#tbl_top tbody');
const select_criterios = document.querySelector('#select_criterios');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario != 'padre_familia') {
    window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones_top_mep();


let filtrar_criterios = () =>{
    switch(select_criterios.value){
        case 'Todos':
            mostrar_datos();
        break;
        case 'Escuelas publicas':
            mostrar_datos_publicas();
        break;
        case 'Escuelas privadas':
            mostrar_datos_privadas();       
        break;
    }
};

select_criterios.addEventListener('change', filtrar_criterios);



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


function mostrar_datos_publicas() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 10; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Escuela' && lista_instituciones[i]['modalidad'] == 'Público') {
            
            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;
            
            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

        }
        
    };
};

function mostrar_datos_privadas() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 10; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Escuela' && lista_instituciones[i]['modalidad'] == 'Privado') {
            
            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;
            
            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

        }
    };
};


mostrar_datos();

