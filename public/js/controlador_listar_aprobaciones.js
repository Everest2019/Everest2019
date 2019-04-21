'use strict';

const input_filtrar = document.querySelector('#txt_filtrar');
const tabla = document.querySelector('#tbl_aprobaciones tbody');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='administrador'){
    window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones();

function mostrar_datos() {
  
  let filtro = input_filtrar.value;
  
  tabla.innerHTML = '';


  for (let i = 0; i < lista_instituciones.length; i++) {

    if (lista_instituciones[i]['aprobado'] == false) {
      if (lista_instituciones[i]['nombre_comercial'] .toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        let celda_nombre = fila.insertCell();
        let celda_fecha = fila.insertCell();
        let celda_dias = fila.insertCell();
        let celda_accion = fila.insertCell();

        celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
        let fecha = new Date (lista_instituciones[i]['fecha_creacion']);
        fecha = fecha.toLocaleDateString();
        celda_fecha.innerHTML = fecha;
        celda_dias.innerHTML = fecha;




        let boton_ver = document.createElement('a');
        boton_ver.innerHTML = '<i class="fas fa-eye"></i>';
        boton_ver.href = `aprobaciones.html?id_centro_edicativo=${lista_instituciones[i]['_id']}`;

        celda_accion.appendChild(boton_ver);
      }
    }
  };
};
  mostrar_datos();
  input_filtrar.addEventListener('keyup', mostrar_datos);


