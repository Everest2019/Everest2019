'use strict';

let registrar = (pid_centro_educativo, ptitulo, pfecha, pdescripcion, pnombre_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_noticia",
        method: "POST",
        data: {
            id_centro_educativo: pid_centro_educativo,
            titulo: ptitulo,
            fecha: pfecha,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset= UTF-8',
        dataType: "json"

    });
    request.done(function (msg) {
        let detalle = "Noticia registrada";
        let usuario = pnombre_institucion;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Noticia agregada correctamente',
            text: `La noticia sobre : ${ptitulo} ha sido agregada correctamente`,
            onClose: () => {
                window.location.href = 'panel_centro_educativo_noticias.html';
              } 
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
}
let listar_noticias = () => {
    let lista_noticias = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_noticias",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_noticias = res.noticia;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_noticias;

};

//Buscar centro educativo para mostar en el perfil del
function buscar_centro_educativo(pid_centro_educativo){
    let centro_educativo = [];
    $.ajax({
        url: "http://localhost:4000/api/buscar_centro_educativo",
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

let buscar_noticia=(pid_noticia)=>{
    let noticia = [];

    let request = $.ajax({
      url:"http://localhost:4000/api/buscar_noticia/"+ pid_noticia,
      method:"GET",
      data:{
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
    });

    request.done(function(res){
      noticia = res.noticia;
    });

    request.fail(function(jqXHR, textStatus){
    });

    return noticia;
  };

let actualizar_noticia = (ptitulo,pdescripcion,pfecha,pid)=>{
    let request = $.ajax({
      url:"http://localhost:4000/api/actualizar_noticia",
      method: "POST",
      data:{
        titulo: ptitulo,
        descripcion: pdescripcion,
        fecha: pfecha,
        id:pid
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){
      swal.fire({
            type : 'success',
            title : 'Noticia actualizada',
            text : res.msg,
            onClose: () => {
                window.location.href = 'panel_centro_educativo_noticias.html';
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

  function eliminar_noticia (pid_noticia){
     $.ajax ({
      url:"http://localhost:4000/api/eliminar_noticia",
      method:"POST",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
      data:{
        id: pid_noticia
      },


      beforeSend: function beforeSend(){

      },
      success: function success(response){

      },
      error: function error(_error){
        console.log('request fail');
      },


    });


  };
