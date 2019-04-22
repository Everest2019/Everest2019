'use strict';

const input_titulo= document.querySelector('#txt_titulo');
const input_descripcion= document.querySelector('#txt_descripcion');
const input_fecha = document.querySelector('#slt_fecha');
const boton_guardar = document.querySelector('#btn_actualizar');


//---------------------------get param
let get_param = (param)=>{
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get(param);

  return id;
};

//-------------------
let _id = get_param('id_noticia');

let noticia = buscar_noticia(_id);
let mostrar_datos = ()=>{
  input_titulo.value = noticia[0]['titulo'];
  input_descripcion.value = noticia[0]['descripcion'];
  let fecha = new Date();
  let nuevaFecha = fecha.toISOString().slice(0,10);
  input_fecha.value = nuevaFecha;
};

if(noticia){
  mostrar_datos();
}
let obtener_datos = ()=>{
  //let error = validar();

  let titulo= input_titulo.value;
  let descripcion = input_descripcion.value;
  let fecha = input_fecha.value;



  actualizar_noticia(titulo, descripcion, fecha, _id);

};
//----------------------------Validate function------
let validar=()=>{
  let error = false;
  let titulo= input_titulo.value;
  let descripcion = input_descripcion.value;
  let fecha = input_fecha.value;

  if(titulo == ""){
    error = true;
    input_titulo.classList.add('error_input');
    input_titulo.classList.remove('borde');
  }else{
    input_titulo.classList.add('borde');
    input_titulo.classList.remove('error_input');
  }

  if(descripcion == ""){
      error = true;
      input_descripcion.classList.add('error_input');
      input_descripcion.classList.remove('borde');
  }else{
    input_descripcion.classList.add('borde');
    input_descripcion.classList.remove('error_input');
  }

  if(fecha == ""){
      error = true;
      input_fecha.classList.add('error_input');
      input_fecha.classList.remove('borde');
  }else{
    input_fecha.classList.add('borde');
    input_fecha.classList.remove('error_input');

  }
return error;

};
//---------------------------------------------
boton_guardar.addEventListener('click',obtener_datos);
