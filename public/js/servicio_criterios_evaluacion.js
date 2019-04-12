'use strict';

let registrar_criterio = (pdescripcion,pvalor) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_criterio_evaluacion',
        method : "POST",
        data : {
            nombre : pdescripcion,
            valor : pvalor
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        
        swal.fire({
            type : 'success',
            title : 'Criterio agregado con éxito',
            text : 'El criterio se agregó correctamente',
            onClose: () => {
                window.location.href = 'panel_administrador_evaluaciones.html';
              }    
        });

    });

    request.fail(function(res){

    });

};

let modificar_criterio = (pid_criterio,pdescripcion,pvalor) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/modificar_criterio_evaluacion',
        method : "POST",
        data : {
            id_criterio : pid_criterio,
            nombre : pdescripcion,
            valor : pvalor
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        
       
        swal.fire({
            type : 'success',
            title : 'Criterio actualizado con éxito',
            text : 'El criterio se modificó correctamente',
            onClose: () => {
                window.location.href = 'panel_administrador_evaluaciones.html';
              }    
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Error al modificar',
            text : res.msg
        });

    });

};

let eliminar_criterio = (pid_criterio) =>{
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminar_criterio_evaluacion',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id_criterio : pid_criterio
        },
        dataType: "json",
        async: false
    });
    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Criterio eliminado correctamente',
            text: 'El criterio de evaluación fue eliminado'
        });
    });
};

let listar_criterios_evaluacion = () =>{
    let lista_criterios = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_criterios_evaluacion",
        method: "GET",
        data:{},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
        
    });
    request.done(function(res){
        lista_criterios = res.criterios_evaluacion
    });

    request.fail(function (jqXHR, textStatus) {
    });

    return lista_criterios;
};

let buscar_criterio = (id_criterio) =>{
    let criterio_evaluacion;
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_criterio_evaluacion/" + id_criterio,
        method: "GET",
        data:{},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });
    request.done(function(res){
        criterio_evaluacion = res.criterio_evaluacion;
    });
    request.fail(function(jqXHR, textStatus){

    });
    return criterio_evaluacion;
};



