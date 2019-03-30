'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');


mostrar_datos();

function mostrar_datos(){
    let tipoUsuario = localStorage.getItem("tipo_usuario");
    let lista_utiles = listar_utiles();
    if(tipoUsuario != "administrador"){
        document.getElementById("registrar_lista_utiles").style.display = "none";
    }

    tabla.innerHTML='';

    for(let i = 0; i<lista_utiles.length; i++){
        let fila = tabla.insertRow();
        console.log(lista_utiles.length);
        

        fila.insertCell().innerHTML = lista_utiles[i]['articulo'];
        fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
        fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];
    };
};