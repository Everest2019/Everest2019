'use stric';
const btn_agregar_noticia = document.querySelector('#btn_agregar_noticia');
const btn_agregar_actividad = document.querySelector('#btn_agregar_actividad');
const btn_agregar_pregunta_frecuente = document.querySelector('btn_modificar_pregunta_frecuente') ;
const btn_agregar_etiqueta = document.querySelector('btn_agregar_etiqueta')
 

let agregar_noticia = () =>{
  window.location.href = './registrar_noticia.html';
}
let agregar_actividad = () =>{
  window.location.href = './agregar_actividades.html';
}
let agregar_pregunta = () =>{
  window.location.href = './agregar_preguntas_frecuentes.html';
}
let agregar_etiqueta = () =>{
  window.location.href = './registrar_etiqueta.html';
}


btn_agregar_noticia.addEventListener('click', agregar_noticia);
btn_agregar_actividad.addEventListener('click', agregar_actividad);
btn_agregar_pregunta_frecuente.addEventListener('click', agregar_pregunta)