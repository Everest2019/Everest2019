'use strict';
const lista_preguntas = document.querySelector('#lista_preguntas');
const input_buscar = document.querySelector('#txt_filtrar_preguntas');
const nombre = document.querySelector('#nombre_ce');
const a_regresar = document.querySelector('#a_regresar');

const tabla = document.querySelector('#tbl_pregunta tbody');
//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario == 'centro_educativo') {
  window.location.href = `iniciar_sesion.html`;
}


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

let preguntas = listar_preguntas();

function mostrar_datos() {
  tabla.innerHTML = '';
  let filtro = input_buscar.value;
  for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i]['id_centro_educativo'].includes(id_centro_educativo)) {
      if (preguntas[i]['pregunta'].includes(filtro)) {
      let fila = tabla.insertRow();

      let celda_pregunta = fila.insertCell();
      celda_pregunta.innerHTML = preguntas[i]['pregunta'];

      let celda_respuesta = fila.insertCell();
      celda_respuesta.innerHTML = preguntas[i]['respuesta'];

      }
    }
  }
};


mostrar_datos();
input_buscar.addEventListener('keyup',mostrar_datos);