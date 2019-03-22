'use strict';
let listar_utiles=()=>{
    let listar_utiles =[];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "GET",
        data: {
        },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        listar_utiles = res.lista_utiles;
    });
    
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
    return listar_utiles;

};

let registrar_utiles = (pcantidad,pdescripcion)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_utiles",// se necesita el protocolo http para que funciona por que lo pide
        method: "POST",
        data:{
            cantidad:pcantidad,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: ` la cantidad de tiles ${pcantidad} con la descripcion ${pdescripcion} ha sido todo un exito `
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });


};