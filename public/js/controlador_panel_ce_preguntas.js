'use strict';
const lista_preguntas = document.querySelector('#lista_preguntas');
const input_buscar = document.querySelector('#txt_buscar');
const nombre = document.querySelector('#nombre_ce');
const btn_pregunta = document.querySelector('#btn_agregar_pregunta_frecuente');

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let mostrar_datos = () => {
  lista_preguntas.innerHTML = '';
  let preguntas = listar_preguntas();
  let centro_educativo = localStorage.getItem('id_usuario');
  let filtro = input_buscar.value;

  for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i]['id_centro_educativo'].includes(centro_educativo)){
      if(preguntas[i]['pregunta'].includes(filtro)){
        console.log(preguntas[i]['pregunta']);
      
    let pregunta_frecuente = document.createElement('div');
    pregunta_frecuente.classList.add('pregunta');

    let nombre_pregunta = document.createElement('div');
    nombre_pregunta.classList.add('nombre_pregunta');

    let texto_pregunta = document.createElement('p');
    texto_pregunta.innerHTML = preguntas[i]['pregunta'];

    nombre_pregunta.appendChild(texto_pregunta);

    //Respuesta
    let respuesta_pregunta = document.createElement('div');
    respuesta_pregunta.classList.add('respuesta_pregunta');

    let texto_respuesta = document.createElement('p');
    texto_respuesta.innerHTML = preguntas[i]['respuesta'];

    respuesta_pregunta.appendChild(texto_respuesta);

    pregunta_frecuente.appendChild(nombre_pregunta);
    pregunta_frecuente.appendChild(respuesta_pregunta);

    lista_preguntas.appendChild(pregunta_frecuente);
      }
  }
}
}
mostrar_datos();
input_buscar.addEventListener('keyup', mostrar_datos);

btn_pregunta.addEventListener('click',function(){
  window.location.href = './Agregar_preguntas_frecuentes.html';
})
