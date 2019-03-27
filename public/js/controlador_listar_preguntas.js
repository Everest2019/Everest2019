'use strict';

const input_filtrar = document.querySelector('#txt_filtrar_preguntas');
const tbody = document.querySelector('#tbl_preguntas body');


let preguntas= new Array(3);
preguntas[0]= ("es el universo infinito?","si, es infinito");
preguntas[1]= ("existe la posibilidad de viajar atrás en al tiempo","no , aun no se ha logrado");



let mostrar_preguntas = ()=>{
  tbody.innerHTML= '';
  let filtro= input_filtrar.value;

  for(let i=0;i<preguntas.length;i++){
    let fila = tbody.insertRow();
    if(preguntas[i][0].toLowerCase().includes(filtro.toLowerCase())){
      fila.insertCell().innerHTML = preguntas[i][0];
      fila.insertCell().innerHTML = preguntas[i][1];
    }

  }
};
