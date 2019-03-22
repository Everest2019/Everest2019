'use strict';


let registrar = (pimagen,pfecha,ptitulo, pdescripcion) =>{
    let request = $.ajax({
        url:"http:localhost:4000/api/registrar_actividad",
        method: "POST",
        data:{
            imagen:pimagen,
            fecha: pfecha,
            titulo: ptitulo,
            descripcion: pdescripcion

        },
        contentType: 'application/x-www-form-urlencoded; charset= UTF-8',
        dataType :"json"
    });
    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: 'Actividad agregada correctamente',
            text:`La actividad: ${ptitulo} ha sido agregada correctamente`
        });
    });

    request.fail(function( jqXHR, textStatus ) {
      
    }); 

};