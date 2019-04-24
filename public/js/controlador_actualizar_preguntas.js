'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) =>{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); //Toma el parámetro id del url y retorna el valor
    return id;
}

let _id = get_param('id');

let pregunta = buscar_pregunta(_id); 
let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);

if(pregunta){
    input_pregunta.value = pregunta[0]['pregunta'];
    input_respuesta.value = pregunta[0]['respuesta'];
}

let obtener_datos = () =>{
    let pregunta = input_pregunta.value;
    let respuesta = input_respuesta.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_pregunta(pregunta,respuesta, _id, centro_educativo['nombre_comercial']);
        }
      })   
};

btn_actualizar.addEventListener('click', obtener_datos);


