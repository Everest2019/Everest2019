'use strict';


let registrar_pregunta = (pid_centro_educativo,ppregunta, prespuesta) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pregunta",
        method: "POST",
        data: {
            id_centro_educativo: pid_centro_educativo,
            pregunta: ppregunta,
            respuesta: prespuesta
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        datatype: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Pregunta registrada correctamente',
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
