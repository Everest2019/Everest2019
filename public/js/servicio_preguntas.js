'use strict';


let registrar_pregunta = (ppregunta, prespuesta) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_preguntas",
        method: "POST",
        data: {

            pregunta : ppregunta,
            respuesta : prespuesta
    },
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    datatype: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            title: 'Pregunta registrada correctamente'
    });

    });
    request.fail(function( jqXHR, textStatus ) {

});

};
