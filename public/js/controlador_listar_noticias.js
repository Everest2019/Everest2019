'use strict';

const input_filtrar = document.querySelector('#txt_filtrar_noticia');
const tabla= document.querySelector('#tbl_noticias tbody');

let listaNoticias = listar_noticias();
mostrar_noticias();

input_filtrar.addEventListener('keyup', mostrar_noticias);

let mostrar_noticias = () =>{
    tbody.innerHTML= '';
    let filtro = input_filtrar.value;

    for(let i=0;i<listaNoticias.length;i++){
      if(listaNoticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())){
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = listaNoticias[i]['fecha'];
        fila.insertCell().innerHTML = listaNoticias[i]['titulo'];
        fila.insertCell().innerHTML = listaNoticias[i]['descripcion'];
      }
    }
};
