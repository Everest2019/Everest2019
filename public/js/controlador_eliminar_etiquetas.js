'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');
const input_filtro = document.querySelector('#txt_filtar');
let centro_educativo = localStorage.getItem('centro_educativo');

let boton_eliminar = document.querySelector('#btn_eliminar');




let _id = localStorage.getItem('id_usuario');
let mi_centro_educativo = buscar_centro_educativo(_id);
console.log(mi_centro_educativo['nombre_comercial']);

let listar_etiquetas = () =>{
  tabla.innerHTML = '';
  let etiquetas = mi_centro_educativo['etiquetas'];

  for(let i=0;i<etiquetas.length;i++){
    let fila = tabla.insertRow();

    fila.insertCell().innerHTML = etiquetas[i]['accion'];
    fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
    // se crea una nueva celda para el boton de editar
    let celda_configuracion = fila.insertCell();

    //creacion del boton de editar
    //let boton = document.createElement('button');
    let eliminar = document.createElement('input');
    eliminar.type = 'checkbox';
    eliminar.value= etiquetas[i]['_id'];
    eliminar.name = etiquetas[i]['_id'];

    celda_configuracion.appendChild(eliminar);

  }

};
listar_etiquetas();

let obtener_datos =()=>{
  let seleccionadas = document.querySelectorAll('input[type=checkbox]:checked');

  for(let i=0;i<seleccionadas.length;i++){
    console.log(seleccionadas[i].value);
    remover_etiquetas(mi_centro_educativo,seleccionadas[i].value);

  }

};
boton_eliminar.addEventListener('click',obtener_datos);
