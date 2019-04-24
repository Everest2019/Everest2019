'use strict';

const tabla = document.querySelector('#tbl_instituciones tbody');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='administrador'){
    window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones_mejor_evaluadas();
console.log(lista_instituciones);

function mostrar_datos() {

  tabla.innerHTML = '';
  for (let i = 0; i < lista_instituciones.length; i++) {

    if(lista_instituciones[i]['evaluacion']){

        let fila = tabla.insertRow();
        let celda_posicion = fila.insertCell();
        let celda_nombre = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_telefono = fila.insertCell();
        let celda_evaluacion = fila.insertCell();

        celda_posicion.innerHTML = i+1 + '.'
        celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];

        celda_correo.innerHTML = lista_instituciones[i]['correo'];
        celda_telefono.innerHTML = lista_instituciones[i]['telefono'];

        celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

        let icono_estrella = document.createElement('i');
        icono_estrella.classList.add('fas', 'fa-star');

        celda_evaluacion.appendChild(icono_estrella);
      }
    }
}
  mostrar_datos();


