'use strict';
const lista_noticias = document.querySelector('#lista_noticias');
const input_filtrar = document.querySelector('#txt_buscar');
const nombre = document.querySelector('#nombre_ce');
const tabla = document.querySelector('#lista_noticias tbody');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario == 'centro_educativo') {
  window.location.href = `iniciar_sesion.html`;
}


const a_regresar = document.querySelector('#a_regresar');

a_regresar.addEventListener('click', function () {
  if (localStorage.getItem('tipo_usuario') == 'administrador') {
    window.location.href = './panel_administrador_instituciones.html';
  }
  else {
    window.location.href = './instituciones.html';
  }
});

a_regresar.classList.add('estilos_a');

let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let noticias = listar_noticias();

function mostrar_noticias () {
  tabla.innerHTML = '';
  let filtro = input_filtrar.value;

  let centro_educativo = localStorage.getItem('centro_educativo');
  for (let i = 0; i < noticias.length; i++) {
    if (noticias[i]['id_centro_educativo'].includes(centro_educativo)) {
      if (noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        let fecha = new Date(noticias[i]['fecha']);
        fecha = fecha.toLocaleDateString();
        fila.insertCell().innerHTML = fecha;
        fila.insertCell().innerHTML = noticias[i]['titulo'];
        fila.insertCell().innerHTML = noticias[i]['descripcion'];
      }
    }
  }
}

mostrar_noticias();

input_filtrar.addEventListener('keyup', mostrar_noticias);