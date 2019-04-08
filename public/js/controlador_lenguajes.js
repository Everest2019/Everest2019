'use strict';

const input_idioma = document.querySelector('#txt_idioma');
const input_iso = document.querySelector('#txt_iso');
//const input_flag = document.queryselect('');
const boton_guardar = document.querySelector('#btn_registrar');


let idioma = input_idioma.value;
let iso = input_iso.value;

let registrar_lenguaje = ()=>{
  let idioma = input_idioma.value;
  let iso = input_iso.value;
  let flag = "flag";
  //let flag =input_flag.src;
  registrar(idioma,iso,flag);
};


boton_guardar.addEventListener('click',registrar_lenguaje);
