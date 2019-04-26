'use strict';
let listar_utiles = () => {
    let listar_utiles = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "GET",
        data: {
        },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        listar_utiles = res.utiles;
    });

    request.fail(function (jqXHR, textStatus) {
    });
    return listar_utiles;

};

let registrar_utiles = (particulo, pcantidad, pdescripcion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data: {
            articulo: particulo,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            //tipo_usuario:ptipo_usuario,
            //id_centro_educativo: pid_centro_educativo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (res) {
        let detalle = "Artículo agregado a la lista de útiles";
        let usuario = 'Administrador';
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);
    });

    

    request.fail(function (jqXHR, textStatus) {
    });


};

let buscar_lista_utiles = (id_lista_utiles) => {
    let lista_utiles = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_lista_utiles/" + id_lista_utiles,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_utiles = res.lista_utiles;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_utiles;

};

let actualizar_lista_utiles = (particulo, pcantidad, pdescripcion, pid) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_lista_utiles',
        method: "post",
        data: {
            articulo: particulo,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            id: pid
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Articulo de la ista actualizado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.href = 'lista_utiles.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });

};

function borrar_lista_utiles(pid) {
    $.ajax({
        url: 'http://localhost:4000/api/borrar_lista_utiles',
        method: 'post',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id_lista_utiles: pid
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {

        let detalle = "Artículo eliminado de la lista de útiles";
        let usuario = 'Administrador';
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

            Swal.fire({
                title: 'Lista eliminada',
                text: 'La lista de útiles fue eliminada con éxito',
                type: 'success'
            }

            )
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
}