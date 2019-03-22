'use strict'


const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_identificacion = document.querySelector('#num_identificacion');
const input_cantidad_hijos = document.querySelector('#num_cantidad_hijos');
const input_edad_hijos = document.querySelector('#num_edad_hijos');
const select_provincia = document.querySelector('#provincia');
const datalist_canton = document.querySelector('#canton');
const datalist_distrito = document.querySelector('#distrito');
const boton_enviar = document.querySelector('#btn_enviar');

let validar =() =>{
  let error=false;
  if(input_primer_nombre.value == ''){
    error = true;
    input_primer_nombre.classList.add('error_input');
  }else{
    input_primer_nombre.classList.remove ('error_input');
  }
  if(input_segundo_nombre.value == ''){
    error = true;
    input_segundo_nombre.classList.add('error_input');
  }else{
    input_segundo_nombre.classList.remove('error_input');
  }
  if(input_primer_apellido.value == ''){
    error = true;
    input_primer_apellido.classList.add('error_input');
  }else{
    input_primer_apellido.classList.remove('error_input');
  }
  if(input_segundo_apellido.value == ''){
    error = true;
    input_segundo_apellido.classList.add ('error_inpu');
  }else{
    input_segundo_apellido.value.remove('error_input');
  }
  if(input_identificacion.value == ''){
    error = true;
    input_identificacion.classList.add('error_input');
  }else{
    input_identificacion.classList.remove('error_input');
  }
  if(input_cantidad_hijos.value == ''){
    error = true;
    input_cantidad_hijos.classList.add('error_input');
  }else{
    input_cantidad_hijos.classListremove('error_input');
  }
  if(input_edad_hijos.value == ''){
    error = true;
    input_edad_hijos.classList.add('error_input');
  }else{
    input_edad_hijos.classList.remove('error_input');
  }
  if(select_provincia.value == ''){
    error = true;
    select_provincia.classList.add('error_select');
  }else{
    select_provincia.classList.remove('error_select');
  }
  if(datalist_canton.value == ''){
    error = true;
    datalist_canton.classList.add('error_datalist');
  }else{
    datalist_canton.classList.remove('error_datalist');
  }
  if(datalist_distrito.value == ''){
    error = true;
    datalist_distrito.classList.add('error_datalist');
  }else{
    datalist_distrito.classList.remove('error_datalist');
  }
  return error;
};

let obtener_datos = () =>{
  if(validar() == false){
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let identificacion = input_identificacion.value;
    let cantidad_hijos = input_cantidad_hijos.value;
    let edad_hijos = input_edad_hijos.value;
    let provincia = select_provincia.value;
    let canton = datalist_canton.value;
    let distrito = datalist_distrito.value;

    registrar_usuario(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, identificacion, cantidad_hijos, edad_hijos, provincia, canton, distrito);
  
  }else{
    swal.fire({
      type: 'warning',
      title: 'El usuario no se registro',
      text: 'Por favor verifique los campos resaltados'
    });
  }

};

boton_enviar.addEventListener('click',obtener_datos);
