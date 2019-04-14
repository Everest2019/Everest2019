'use strict';

let registrar_solicitud = (pid_centro_educativo, pid_padre_familia) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_solicitud",
        method: "POST",
        data: {
            id_padre_familia: pid_padre_familia,
            id_centro_educativo: pid_centro_educativo,
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Solicitud creada correctamente',
            text: `Su solicitud con el centro educativo ha sido creada correctamente`,
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus);
    });

};
let listar_solicitudes = () =>{
    let lista_solicitudes = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_solicitudes",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_solicitudes = res.solicitud;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_solicitudes;

};
let buscar_solicitud = (id) => {
    let solicitud = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_solicitud/" +id,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        solicitud = res.solicitud;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return solicitud;

};
function borrar_solicitud(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_solicitud',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id : pid
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {
            
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};
  //Buscar padre familia
function buscar_padre_familia(pid_padre_familia){
    let padre_familia = [];
    $.ajax({
        url: 'http://localhost:4000/api/buscar_padre_familia',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        data: {
            id : pid_padre_familia
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {
          padre_familia = response;

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });

    return padre_familia;
  };
