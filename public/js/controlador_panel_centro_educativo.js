'use stric';
const btn_agregar_noticia = document.querySelector('#btn_agregar_noticia');
const btn_agregar_actividad = document.querySelector('#btn_agregar_actividad');
const btn_agregar_lista_utiles = document.querySelector('#btn_agregar_lista_utiles');
 
let agregar_lista_utiles = () =>{
  window.location.href = './registrar_lista_utiles.html';
}
let agregar_actividad = () =>{
  window.location.href = './agregar_actividades.html';
}
let agregar_noticia = () =>{
    window.location.href = './registrar_noticia.html';
};

btn_agregar_actividad.addEventListener('click', agregar_actividad);