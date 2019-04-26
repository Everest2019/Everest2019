'use strict';


let citas = listar_citas();

const tabla = document.querySelector('#tbl_citas tbody');
const input_filtrar = document.querySelector('#txt_buscar_cita');
let id_usuario = localStorage.getItem('id_usuario');
let usuario = buscar_padre_familia(id_usuario);
let nombre_usuario = usuario['primer_nombre'] + ' ' + usuario['primer_apellido'];

let nombre = '';

//let institucion

let mostrar_datos =()=>{
  tabla.innerHTML ='';

  for(let i = 0; i<citas.length;i++){
    let filtro = input_filtrar.value;
    let id_ce = citas[i]['id_centro_educativo'];
    let centro_educativo = buscar_centro_educativo(id_ce);

    if(citas[i]['id_padre_familia'].includes(id_usuario)){
      if(centro_educativo['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())){

      
      console.log(centro_educativo['nombre_comercial']);
      let fila = tabla.insertRow();
      nombre = centro_educativo['nombre_comercial'];

      let fecha_cita = new Date(citas[i]['fecha']);
      let fecha = fecha_cita.getDate() + "-"+ (fecha_cita.getMonth()+1)+"-"+ fecha_cita.getFullYear();

      fila.insertCell().innerHTML = nombre;
      fila.insertCell().innerHTML = fecha;
      fila.insertCell().innerHTML = citas[i]['hora'];

      let celda_cancelar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href = '#';
      boton_eliminar.dataset.id = citas[i]['_id'];
      boton_eliminar.addEventListener('click',confirmar_borrado);

      let icono_eliminar = document.createElement('i');
      icono_eliminar.classList.add('fas','fa-times','fa-2x');

      boton_eliminar.appendChild(icono_eliminar);
      celda_cancelar.appendChild(boton_eliminar);

      }
    }

  }

};
function confirmar_borrado() {
  let id = this.dataset.id;
  swal.fire({
    title: 'Cancelar cita',
    text: '¿Desea cancelar la cita?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cancelar cita',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      eliminar_cita_padre(id,nombre_usuario);
    

    }
  })
};
mostrar_datos();
input_filtrar.addEventListener('keyup',mostrar_datos);
