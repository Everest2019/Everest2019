'use strict';

const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) =>{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); //Toma el parámetro id del url y retorna el valor
    return id;
}

let _id = get_param('id');

let pregunta = buscar_pregunta(_id); 





