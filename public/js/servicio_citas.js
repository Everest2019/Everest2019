'use strict';

let registrar_cita = (pid_centro_educativo, pid_padre_familia, pfecha, phora, pcomentario) => {
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
        swal.fire({
            type: 'success',
            title: 'Cita creada correctamente',
            text: `Su cita con el centro educativo ha sido creada correctamente`,
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
function buscar_padre_familia(pid_padre_familia){
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