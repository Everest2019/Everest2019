'use strict';


let registrar_pregunta = (pid_centro_educativo,ppregunta, prespuesta, pnombre_institucion) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pregunta",
        method: "POST",
        data: {
            id_centro_educativo: pid_centro_educativo,
            pregunta: ppregunta,
            respuesta: prespuesta
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        datatype: "json",
        async: false
    });

    request.done(function (msg) {

        let detalle = "Pregunta frecuente registrada";
        let usuario = pnombre_institucion;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Pregunta registrada correctamente',
            text: 'La pregunta será visualizada por los usuarios',
            onClose: () => {
                window.location.href = 'panel_centro_educativo_preguntas_frecuentes.html';
              } 
        });

    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus);
    });

};
let listar_preguntas = () => {
    let lista_pregunta = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_pregunta",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_pregunta = res.preguntas;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_pregunta;

};

let buscar_pregunta = (id) => {
    let pregunta = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_pregunta/" +id,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        pregunta = res.pregunta;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return pregunta;

};

let actualizar_pregunta = (ppregunta, prespuesta, pid, pnombre_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_pregunta",
        method: "POST",
        data: {
            pregunta: ppregunta,
            respuesta: prespuesta,
            id : pid
        },
        datatype: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    request.done(function (res) {

        let detalle = "Pregunta frecuente modificada";
        let usuario = pnombre_institucion;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Pregunta modificada correctamente',
            text: res.msg,
            onClose: () => {
                window.location.href = 'panel_centro_educativo_preguntas_frecuentes.html';
              }  
        });

    });
    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });

};

function borrar_pregunta(pid, pnombre_institucion){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_pregunta',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id : pid
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {
            let detalle = "Pregunta frecuente eliminada";
            let usuario = pnombre_institucion;
            let fecha = new Date();

            registrar_accion(usuario,detalle,fecha);
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};



//Buscar centro educativo para mostar en el perfil del
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
