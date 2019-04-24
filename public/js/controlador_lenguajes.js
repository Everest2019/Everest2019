'use strict';

const input_idioma = document.querySelector('#txt_idioma');
const input_iso = document.querySelector('#txt_iso');
const input_flag = document.querySelector('#imagen_idioma');
const boton_guardar = document.querySelector('#btn_registrar');





let registrar_lenguaje = ()=>{
  let idioma = input_idioma.value;
  let iso = input_iso.value;
  let flag =input_flag.src;

  registrar(idioma,iso,flag);
};
/*
let validar = ()=>{
  let error= false;
//--------idioma------------------
  if(input_idioma.value== ""){
    error= true;
    input_idioma.classList.add('error_input');
    //input_idioma.classList.remove('borde');
  }else{
    error = false;
    input_idioma.classList.remove('error_input');
    //input_idioma.classList.add('borde');
  }
//----------iso--------------

  if( input_iso.value== ""){
    error= true;
    input_iso.classList.add('error_input');
    //input_iso.classList.remove('borde');
  }else{
  error= false;
  input_iso.classList.remove('error_input');
  //input_iso.classList.add('borde');
}
};
/*  if(input_flag.src=="img"){

}*/



boton_guardar.addEventListener('click',registrar_lenguaje);
