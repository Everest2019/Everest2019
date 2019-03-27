'use strict';

let registrar = (pid_centroE,titulo_noticia,fecha_noticia,desc_noticia) =>{
    let request = $.ajax({
        url:"http://localhost:4000/api/registrar_noticia",
        method :"POST",
        data:{
            id_ce: pid_centroE,
            titulo: titulo_noticia,
            fecha: fecha_noticia,
            descripcion:desc_noticia
        },
        contentType: 'application/x-www-form-urlencoded; charset= UTF-8',
        dataType :"json"

    });
    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: 'Noticia agregada correctamente',
            text:`La noticia sobre : ${titulo_noticia} ha sido agregada correctamente`
        });
    });

    request.fail(function(jqXHR, textStatus){

    });
}

let listar_noticias = ()=>{
    let noticias = [];
    let request= $.ajax({
        url:"http://localhost:4000/api/listar_noticias",
        method:"GET",
        data:{
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        noticias = res.noticias;
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    return noticias;

}
