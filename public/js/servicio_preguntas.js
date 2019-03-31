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
