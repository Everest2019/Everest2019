'use strict';
let listar_etiquetas = ()=>{
    let  listar_etiquetas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_etiquetas",// se necesita el protocolo http para que funciona por que lo pide
        method: "GET",
        data: {
            
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        listar_etiquetas = res.etiquetas;
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    return listar_etiquetas;
};
let registrar_etiquetas = (paccion, pdescripcion)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_etiquetas",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data: {
            accion: paccion,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se ha creado con exito la etiqueta',
            text: `Se ha creado exitosamente la etiqueta con el nombre de ${paccion} con la siguiente descripción ${pdescripcion}`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};