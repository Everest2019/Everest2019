'use strict';
const lista_preguntas = document.querySelector('#lista_preguntas');
const input_buscar = document.querySelector('#txt_buscar');
const nombre = document.querySelector('#nombre_ce');
const btn_pregunta = document.querySelector('#btn_agregar_pregunta_frecuente');

//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

let preguntas = listar_preguntas();
mostrar_datos();

input_buscar.addEventListener('keyup', mostrar_datos);

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];
function mostrar_datos() {

  const tabla = document.querySelector('#tbl_pregunta tbody');

  let centro_educativo = localStorage.getItem('id_usuario');
  let filtro = input_buscar.value;

  tabla.innerHTML = '';
  for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i]['id_centro_educativo'].includes(centro_educativo)) {
      if (preguntas[i]['pregunta'].includes(filtro)) {
        let fila = tabla.insertRow();

        let celda_pregunta = fila.insertCell();
        let celda_respuesta = fila.insertCell();

        celda_pregunta.innerHTML = preguntas[i]['pregunta'];
        celda_respuesta.innerHTML = preguntas[i]['respuesta'];


        let celda_configuracion = fila.insertCell();
        //Creación del botón de editar
        let boton_editar = document.createElement('a');
        boton_editar.innerHTML='<i class="fas fa-pencil-alt"></i>';
        boton_editar.href = `actualizar_preguntas.html?id=${preguntas[i]['_id']}`;


        celda_configuracion.appendChild(boton_editar);


        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML='<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = preguntas[i]['_id'];

        boton_eliminar.addEventListener('click', confirmar_borrado);

        celda_configuracion.appendChild(boton_eliminar);
      }

    }
  }
}

function confirmar_borrado(){
  let id =  this.dataset.id;
  Swal.fire({
    title: 'Está seguro que desea eliminar la pregunta?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
      if (result.value) {
          borrar_pregunta(id, centro_educativo['nombre_comercial']);
          preguntas = listar_preguntas();
          mostrar_datos();
        Swal.fire({
          title: 'Pregunta eliminada',
          text: 'La pregunta fue borrada con éxito',
          type: 'success'
        })
      }
    })
};

btn_pregunta.addEventListener('click', function () {
  window.location.href = './Agregar_preguntas_frecuentes.html';
})
