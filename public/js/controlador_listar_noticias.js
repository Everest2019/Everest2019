'use strict';

const input_filtrar = document.querySelector('#txt_filtrar_noticia');
const tabla= document.querySelector('#tbl_noticias tbody');


let listaNoticias= new Array(3);


listaNoticias[0] =new Array ("06.07.2016","Campeonato de boleyball","en esta fecha nuestra institución ganó el campeonato nacional en esta disciplina");
listaNoticias[1] =new Array("02.11.2018","Partido de futball","En esta ocasión el equipo infantil le metió una goleada al otro equipo");
listaNoticias[2] =new Array("10.05.1999","Danza aerea","Actividad en la cual estudiantes mostraron sus destrezas en danza aerea");



let mostrar_noticias = () =>{
    tabla.innerHTML= '';
    let filtro = input_filtrar.value;


    for(let i=0;i<listaNoticias.length;i++){
      if(listaNoticias[i][1].includes(filtro)){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = listaNoticias[i][0];
        fila.insertCell().innerHTML = listaNoticias[i][1];
        fila.insertCell().innerHTML = listaNoticias[i][2];

      }


    }
};




mostrar_noticias();
input_filtrar.addEventListener('keyup', mostrar_noticias);
