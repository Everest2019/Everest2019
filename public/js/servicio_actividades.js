'use strict';


   let  registrar_actividades = (pid_centro_educativo,ptitulo, pfecha, pdescripcion) => {
   
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_actividades",
        method: "POST",
        data: { 
            id_centro_educativo: pid_centro_educativo,
            titulo : ptitulo,
            fecha : pfecha,
            descripcion : pdescripcion
    },
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    datatype: "json"
    });

    request.done(function(msg){

        swal.fire({ 
            type: 'success',
            title: 'Actividad enviada correctamente'
    });    

    });
    request.fail(function( jqXHR, textStatus ) {

});

};

let listar_actividades = () =>{
    let lista_actividades= [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_actividades",
        method: "GET",
        data: {
            },
    datatype: "json",
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
    });

    request.done(function(res){
        lista_actividades = res.actividades;
    
    });

    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_actividades;
};
