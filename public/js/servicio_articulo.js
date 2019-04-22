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
        
        let detalle = "Artículo registrado";
        let usuario = 'Administrador';
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Artículo creado',
            text: `${pnombre} agregado correctamente`
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

let modificar_articulo = (pid_articulo,pnombre, pdescripcion) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/modificar_articulo',
        method : "POST",
        data : {
            id_articulo: pid_articulo,
            nombre: pnombre,
            descripcion: pdescripcion
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        
        let detalle = "Artículo modificado";
        let usuario = 'Administrador';
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type : 'success',
            title : 'Artículo actualizado con éxito',
            text : 'El artículo se modificó correctamente',
            onClose: () => {
                window.location.href = 'panel_administrador_articulos.html';
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

let eliminar_articulo = (pid_articulo) =>{
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminar_articulo',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id_articulo : pid_articulo
        },
        dataType: "json",
        async: false
    });
    request.done(function(res){
        let detalle = "Artículo eliminado";
        let usuario = 'Administrador';
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Artículo correctamente',
            text: 'El artículo fue eliminado'
        });
    });
};


let buscar_articulo = (id_articulo) =>{
    let articulo;
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_articulo/" + id_articulo,
        method: "GET",
        data:{},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });
    request.done(function(res){
        articulo = res.articulo;
    });
    request.fail(function(jqXHR, textStatus){

    });
    return articulo;
};