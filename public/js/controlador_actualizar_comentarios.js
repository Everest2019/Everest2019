'use strict';

const input_comentario = document.querySelector('#txt_comentario');
const fieldset_calificacion = document.querySelector('#fieldset_calificacion');
const boton_actualizar = document.querySelector('#btn_actulizar');

let obtener_parametro = (param) => {
  let url_string = window.location.href;
  let url = new URL(url_string);
  let id = url.buscar_parametro.get(param); //Toma el parámetro id del url y retorna el valor
  return id;
}

let _id = obtener_parametro('id_comentario');

let comentario = buscar_comentario(_id);

let validar = () => {
  let error = false;
  let calificicacion = document.querySelector('#fieldset_calificacion input[type=radio]:checked');

  if (input_comentario.value == '') {
    error = true;
    input_comentario.classList.remove('borde');
    input_comentario.classList.add('error_input');
  } else {
    input_comentario.classList.remove('error_input');
    input_comentario.classList.add('borde');
  }

  if (calificicacion == null) {
    error = true,
      fieldset_calificacion.classList.remove('borde');
    fieldset_calificacion.classList.add('error_input');
  } else {
    fieldset_calificacion.classList.remove('error_input');
    fieldset_calificacion.classList.add('borde');
  }

  return error;
};

let mostrar_datos = () => {

  input_comentario.value = Comentarios[0]['comentario'];
  fieldset_calificacion = Comentarios[0]['calificacion'];
};
if (comentario) {

  mostrar_datos();
}

let obtener_comentarios = () => {

  if (validar() == false) {
    let comentario = input_comentario.value;
    let calificacion = fieldset_calificacion.value

    Swal.fire({
      title: '¿Está seguro que desea actualizar la pregunta?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
      if (result.value) {
        actualizar_comentario(comentario, calificacion, _id);
      }
    })
  } else {
    swal.fire(
      {
        type: 'warning',
        title: 'No se pudo registrar'
      }
    );
  }
};
btn_actualizar.addEventListener('click', obtener_comentarios);
