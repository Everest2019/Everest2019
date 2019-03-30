'use strict'
<<<<<<< HEAD

let listar_preferencias = () => {
    let listar_preferencias = [];


=======
let listar_preferencias = () => {
    let listar_preferencias = [];
>>>>>>> 75fb90f7e257d810d97ac9e1838aacd9926c3066
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_preferencias",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

<<<<<<< HEAD
    request.done(function (res) { 
        listar_preferencias = res.preferencia;
=======
    request.done(function (res) {
        listar_preferencias = res.registrar;
>>>>>>> 75fb90f7e257d810d97ac9e1838aacd9926c3066

    });

    request.fail(function (jqXHR, textStatus) {
        

    });
    return listar_preferencias;

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