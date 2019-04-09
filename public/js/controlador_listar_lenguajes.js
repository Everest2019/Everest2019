'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
let lista_idiomas = listar_lenguajes();


let show_languages = () =>{
  tabla.innerHTML = '';


  for(let i=0;i<lista_idiomas.length;i++){
    let fila = tabla.insertRow();

    let celda_iso= fila.insertCell();
    let celda_idioma= fila.insertCell();

    celda_iso.innerHTML = lista_idiomas[i]['iso'];
    celda_idioma.innerHTML = lista_idiomas[i]['nombre'];
  }
};

show_languages();
