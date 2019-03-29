'use strict';

const input_buscar = document.querySelector('#txt_buscar');


let mostrar_datos = () => {
    let preferencia = listar_preferencias();
    var padre= `preferencia_padres`;
    for (let i = 0; i < preferencia.length; i++) {

        //if (preferencia[i]['preferencia'] == padre) {


            let celda_nombre = fila.insertCell();
            let celda_descripcion = fila.insertCell();

            celda_nombre.innerHTML = lista_articulo[i]['nombre'];
            celda_descripcion.innerHTML = lista_articulo[i]['descripcion'];


        //};
    }
};

mostrar_datos();