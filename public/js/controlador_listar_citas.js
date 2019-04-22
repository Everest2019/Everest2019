'use strict';


let citas = listar_citas();
console.log(citas[0]['id_centro_educativo']);
const tabla = document.querySelector('#tbl_citas');

let id_usuario = localStorage.getItem('id_usuario');


let nombre = '';

//let institucion

let mostrar_datos =()=>{
  tabla.innerHtml ='';



  for(let i = 0; i<citas.length;i++){
    let id_ce = citas[i]['id_centro_educativo'];
    let centro_educativo = buscar_centro_educativo(id_ce);
  //  console.log(centro_educativo['nombre_comercial']);

    if(citas[i]['id_padre_familia'].includes(id_usuario)){
      console.log(centro_educativo['nombre_comercial']);
      let fila = tabla.insertRow();
      nombre = centro_educativo['nombre_comercial'];

      let fecha_cita = new Date(citas[i]['fecha']);
      let fecha = fecha_cita.getDate() + "-"+ (fecha_cita.getMonth()+1)+"-"+ fecha_cita.getFullYear();

      fila.insertCell().innerHTML = nombre;
      fila.insertCell().innerHTML = fecha;
      fila.insertCell().innerHTML = citas[i]['hora'];

      let boton_eliminar = document.createElement('input');
      boton_eliminar.type= 'checkbox';

      let celda_eliminar= fila.insertCell();
      celda_eliminar.appendChild(boton_eliminar);


    }

  }

};

mostrar_datos();
