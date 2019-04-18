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

let registrar_utiles = (particulo,pcantidad,pdescripcion,particulo_1,pcantidad_1,pdescripcion_1,particulo_2,pcantidad_2,pdescripcion_2,particulo_3,pcantidad_3,pdescripcion_3,particulo_4,pcantidad_4,pdescripcion_4,particulo_5,pcantidad_5,pdescripcion_5,particulo_6,pcantidad_6,pdescripcion_6,particulo_7,pcantidad_7,pdescripcion_7,particulo_8,pcantidad_8,pdescripcion_8,particulo_9,pcantidad_9,pdescripcion_9,particulo_10,pcantidad_10,pdescripcion_10,particulo_11,pcantidad_11,pdescripcion_11,particulo_12,pcantidad_12,pdescripcion_12,particulo_13,pcantidad_13,pdescripcion_13,particulo_14,pcantidad_14,pdescripcion_14)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data:{
            articulo:particulo,
            cantidad:pcantidad,
            descripcion: pdescripcion,
            //tipo_usuario:ptipo_usuario,
            //id_centro_educativo: pid_centro_educativo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El registro ha sido completado!'
        });
    });

    request.fail(function (jqXHR, textStatus) {
    });


};