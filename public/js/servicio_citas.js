'use strict';

let registrar_cita = (pid_centro_educativo, pid_padre_familia, pfecha, phora, pcomentario, pnombre_usuario) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_cita",
        method: "POST",
        data: {
            id_padre_familia: pid_padre_familia,
            id_centro_educativo: pid_centro_educativo,
            fecha: pfecha,
            hora: phora,
            comentario: pcomentario
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {

        let detalle = "Cita registrada";
        let usuario = pnombre_usuario;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);
        
        swal.fire({
            type: 'success',
            title: 'Cita creada correctamente',
            text: `Su cita con el centro educativo ha sido creada correctamente`,
            onClose: () => {
                window.location.href = 'perfil_centro_educativo_general.html';
              }   
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus);
    });

};

let listar_citas = () =>{
    let lista_citas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_citas",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_citas = res.cita;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_citas;

};


  //Buscar padre familia
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

  let eliminar_cita = (pid_cita, pnombre_institucion)=>{
    $.ajax({
        url: 'http://localhost:4000/api/eliminar_cita',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id_cita : pid_cita
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {
            let detalle = "Cita cancelada";
            let usuario = pnombre_institucion;
            let fecha = new Date();

            registrar_accion(usuario,detalle,fecha);

            Swal.fire({
                title:'Cita cancelada',
                text:'La cita fue cancelada con éxito',
                type:'success',
                onClose: () =>{
                    window.location.href = 'panel_centro_educativo_citas.html';
                }
            });
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
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
