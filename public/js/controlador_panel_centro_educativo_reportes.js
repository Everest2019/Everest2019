'use strict';
const nombre = document.querySelector('#nombre_ce');
const tabla = document.querySelector('#tbl_reportes tbody');

//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

//Primer reporte
let fila = tabla.insertRow();

fila.insertCell().innerHTML = 'Reporte visitas';
fila.insertCell().innerHTML = 'Permite visualizar la cantidad de visitas realizadas por los padres de familia';

 // se crea una nueva celda para el boton de generar el reporte 
 let celda_configuracion1 = fila.insertCell();
 let boton_redirigir1 = document.createElement('a');
 boton_redirigir1.href = 'panel_reportes_centro_educativo.html';
 let icono_redirigir1 = document.createElement('i');
 icono_redirigir1.classList.add('fas', 'fa-arrow-alt-circle-right', 'fa-2x');
 boton_redirigir1.appendChild(icono_redirigir1);   
 celda_configuracion1.appendChild(boton_redirigir1);


 let fila2 = tabla.insertRow();

fila2.insertCell().innerHTML = 'Reporte visitas';
fila2.insertCell().innerHTML = 'Permite visualizar la cantidad de visitas realizadas por los padres de familia';

 // se crea una nueva celda para el boton de generar el reporte 
 let celda_configuracion2 = fila2.insertCell();
 let boton_redirigir2 = document.createElement('a');
 boton_redirigir2.href = 'reporte2.html';
 let icono_redirigir2 = document.createElement('i');
 icono_redirigir2.classList.add('fas', 'fa-arrow-alt-circle-right', 'fa-2x');
 boton_redirigir2.appendChild(icono_redirigir2);   
 celda_configuracion2.appendChild(boton_redirigir2);

 let fila3 = tabla.insertRow();

 fila3.insertCell().innerHTML = 'Reporte visitas';
 fila3.insertCell().innerHTML = 'Permite visualizar la cantidad de visitas realizadas por los padres de familia';
 
  // se crea una nueva celda para el boton de generar el reporte 
  let celda_configuracion3 = fila3.insertCell();
  let boton_redirigir3 = document.createElement('a');
  boton_redirigir3.href = 'reporte2.html';
  let icono_redirigir3 = document.createElement('i');
  icono_redirigir3.classList.add('fas', 'fa-arrow-alt-circle-right', 'fa-2x');
  boton_redirigir3.appendChild(icono_redirigir3);   
  celda_configuracion3.appendChild(boton_redirigir3);