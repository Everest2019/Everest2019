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

            articulo_1:particulo_1,
            cantidad_1:pcantidad_1,
            descripcion_1: pdescripcion_1,

            articulo_2:particulo_2,
            cantidad_2:pcantidad_2,
            descripcion_2: pdescripcion_2,

            //--------------------------------------------------------

            

            articulo_3:particulo_3,
            cantidad_3:pcantidad_3,
            descripcion_3: pdescripcion_3,

            articulo_4:particulo_4,
            cantidad_4:pcantidad_4,
            descripcion_4: pdescripcion_4,

            articulo_5:particulo_5,
            cantidad_5:pcantidad_5,
            descripcion_5: pdescripcion_5,

            articulo_6:particulo_6,
            cantidad_6:pcantidad_6,
            descripcion_6: pdescripcion_6,

            articulo_7:particulo_7,
            cantidad_7:pcantidad_7,
            descripcion_7: pdescripcion_7,

            articulo_8:particulo_8,
            cantidad_8:pcantidad_8,
            descripcion_8: pdescripcion_8,

            articulo_9:particulo_9,
            cantidad_9:pcantidad_9,
            descripcion_9: pdescripcion_9,

            articulo_10:particulo_10,
            cantidad_10:pcantidad_10,
            descripcion_10: pdescripcion_10,

            articulo_11:particulo_11,
            cantidad_11:pcantidad_11,
            descripcion_11: pdescripcion_11,

            articulo_12:particulo_12,
            cantidad_12:pcantidad_12,
            descripcion_12: pdescripcion_12,

            articulo_13:particulo_13,
            cantidad_13:pcantidad_13,
            descripcion_13: pdescripcion_13,

            articulo_14:particulo_14,
            cantidad_14:pcantidad_14,
            descripcion_14: pdescripcion_14,
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: ` Los articulos ${particulo}, ${particulo_1}, ${particulo_2},  con la cantidad de utiles ${pcantidad}, ${pcantidad_1}, ${pcantidad_2}, con la descripcion ${pdescripcion}, ${pdescripcion_1}, ${pdescripcion_2} ha sido todo un exito `
        });
    });

    request.fail(function (jqXHR, textStatus) {
    });


};