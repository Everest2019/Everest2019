'use strict';

let registrar_solicitud = (pid_centro_educativo, pid_padre_familia, pnombre_padre_familia) => {
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

        let detalle = "Solicitud de información registrada";
        let usuario = pnombre_padre_familia;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

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
function borrar_solicitud(pid, pnombre_institucion){
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
            let detalle = "Solicitud de información eliminada";
            let usuario = pnombre_institucion;
            let fecha = new Date();

            registrar_accion(usuario,detalle,fecha);
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

  function buscar_centro_educativo(pid_centro_educativo){
    let centro_educativo = [];
    $.ajax({
        url: 'http://localhost:4000/api/buscar_centro_educativo',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        data: {
            id : pid_centro_educativo
        },
        beforeSend: function beforeSend() {
              
        },
        success: function success(response) {
          centro_educativo = response;
            
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
  
    return centro_educativo;
  };