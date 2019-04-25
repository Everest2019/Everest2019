'use strict';

let registrar_comentario = (pcentro_educativo, pcomentario, pcalificacion, pid_padre_familia) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_comentarios",
        method: "POST",
        data: {
            id_centro_educativo: pcentro_educativo,
            comentario: pcomentario,
            calificacion: pcalificacion,
            id_padre_familia: pid_padre_familia
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        datatype: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            onClose: function(){ location.reload()}
        });

    });
    request.fail(function (jqXHR, textStatus) {
    });
};

let buscar_comentario = (id_comentario) => {
    let comentarios = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_comentario/" + id_comentario,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        comentarios = res.comentarios;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return comentarios;

};

let listar_comentarios = () =>{
    let lista_comentarios= [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_comentarios",
        method: "GET",
        data: {
            },
    datatype: "json",
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
    });

    request.done(function(res){
        lista_comentarios = res.comentarios;
    
    });

    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_comentarios;
}
  
function actualizar_comentario(comentario, calificacion, _id, centro_educativo) {
    $.ajax({
        url: 'http://localhost:4000/api/actualizar_comentario',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            comentario: comentario,
            calificacion: calificacion,
            id: _id,
            centro_educativo: centro_educativo
        },
        beforeSend: function beforeSend() {

        },

        success: function success(response) {

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};

function eliminar_comentario(pid){
    $.ajax({
        url: 'http://localhost:4000/api/eliminar_comentario',
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
};

//buscar usuarios

let buscar_padre_familia = (pid_padre_familia)=>{
    let padre_familia = [];
    $.ajax({
        url: 'http://localhost:4000/api/buscar_padre_familia',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        data: {
            id : pid_padre_familia
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {
          padre_familia = response;

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });

    return padre_familia;
  };

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