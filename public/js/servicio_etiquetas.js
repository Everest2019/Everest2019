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


    request.fail(function (jqXHR, textStatus) {
    });

};

let buscar_etiquetas = (id_etiquetas)=>{
    let etiquetas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_etiquetas/"+ id_etiquetas,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
    });

    request.done(function(res){
        etiquetas= res.etiquetas;
    });

    request.fail(function(jqXHR, textStatus){

    });
    return etiquetas;

};

let actualizar_etiquetas = (paccion,pdescripcion, pid)=>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_etiquetas',
        method : "POST",
        data:{
            accion : paccion,
            descripcion: pdescripcion,
            id : pid
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){

        swal.fire({
            type : 'success',
            title : 'Etiqueta actualizada con éxito',
            text : res.msg,
            onClose: () => {
                window.location.href = 'panel_administrador_etiquetas.html';
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

function borrar_etiquetas(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_etiquetas',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id : pid
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {
            
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
}