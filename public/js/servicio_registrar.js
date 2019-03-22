'use strict'

let listar_preferencia = () => {
    let listar_preferencia = [];


    let request = $.ajax({
        url: "http://localhost:4000/api/listar_preferencia",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        listar_preferencia = res.preferencia;

    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);

    });
    return listar_preferencia;

};
let registrar = (pnombre, pinformacion) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar",
        method: "POST",
        data: {
            nombre: pnombre,
            informacion: pinformacion

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se registro correctamente',
            text: `La preferencia ${pnombre} con la información ${pinformacion} fue enviado correctamente`
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};