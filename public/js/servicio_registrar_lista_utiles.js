'use strict';
let listar_utiles=()=>{
    let listar_utiles =[];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "GET",
        data: {
        },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        listar_utiles = res.utiles;
    });
    
    request.fail(function (jqXHR, textStatus) {
    });
    return listar_utiles;

};

let registrar_utiles = (particulo,pcantidad,pdescripcion,particulo_1,pcantidad_1,pdescripcion_1)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data:{
            articulo:particulo,
            cantidad:pcantidad,
            descripcion: pdescripcion,
            //tipo_usuario:ptipo_usuario,
            //id_centro_educativo: pid_centro_educativo

            articulo_1:particulo_1,
            cantidad_1:pcantidad_1,
            descripcion_1: pdescripcion_1
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: ` Los articulos ${particulo}, ${particulo_1},  con la cantidad de utiles ${pcantidad}, ${pcantidad_1} ,con la descripcion ${pdescripcion}, ${pdescripcion_1}, ha sido todo un exito `
        });
    });

    request.fail(function (jqXHR, textStatus) {
    });


};