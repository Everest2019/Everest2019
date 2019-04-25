'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const btn_agregar = document.querySelector('#btn_agregar');
let lista_idiomas = listar_lenguajes();


let show_languages = () =>{
  tabla.innerHTML = '';


  for(let i=0;i<lista_idiomas.length;i++){
    let fila = tabla.insertRow();

    let celda_iso= fila.insertCell();
    let celda_idioma= fila.insertCell();
    let celda_bandera = fila.insertCell();
    let bandera = document.createElement('img');

    bandera.src= lista_idiomas[i]['bandera'];
    bandera.classList.add('img_bandera');
    celda_bandera.appendChild(bandera);

    celda_iso.innerHTML = lista_idiomas[i]['iso'];
    celda_idioma.innerHTML = lista_idiomas[i]['nombre'];

  }
};


show_languages();
btn_agregar.addEventListener('click', function(){
  window.location.href = 'registrar_lenguaje.html';
})