'use strict';

let registrar_accion = (pusuario,pdetalle,pfecha) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_accion",
        method: "POST",
        dataType: "json",
        data: {
            usuario: pusuario,
            detalle: pdetalle,
            fecha: pfecha
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false,
    })

    request.done(function(msg){
        console.log('Acción agregada a la bitácora');
    });

    request.fail(function(jqXHR, textStatus){
        
    });
};

let listar_acciones_bitacora = () =>{
    let acciones_bitacora = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_bitacora",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });
    request.done(function(res){
        acciones_bitacora = res.acciones;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return acciones_bitacora;
};