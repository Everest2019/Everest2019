'use strict';
let consultar_etiquetas = ()=>{
    let  consultar_etiquetas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_etiquetas",// se necesita el protocolo http para que funciona por que lo pide
        method: "GET",
        data: {
            
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        consultar_etiquetas = res.caso_de_uso;
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    return consultar_etiquetas;
};
let registrar_etiquetas = (paccion)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_etiquetas",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data: {
            accion: paccion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se ha creado con exito la etiqueta',
            text: `Se ha creado exitosamente la etiqueta con el nombre de ${paccion}`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};