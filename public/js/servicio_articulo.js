'use strict';

let registrar_articulo = (pnombre, pdescripcion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_articulo",
        method: "POST",
        data: {
            nombre: pnombre,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se ha creado correctamente',
            text: `Se ha creado exitosamente`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus);
    });

};
let listar =()=>{
    let lista_articulo = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_articulo",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_articulo = res.articulo;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_articulo;

};
