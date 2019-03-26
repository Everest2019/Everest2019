'use strict';
let registrar_usuario = (pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pidentificacion, pcantidad_hijos, pedad_hijos, pprovincia, pcanton, pdistrito)=>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_padre_familia",
        method: "POST",
        data: {
            primer_nombre : pprimer_nombre,
            segundo_nombre : psegundo_nombre,
            primer_apellido : pprimer_apellido,
            segundo_apellido : psegundo_apellido,
            identificacion : pidentificacion,
            cantidad_hijos :pcantidad_hijos,
            edad_hijos : pedad_hijos,
            provincia : pprovincia,
            canton : pcanton,
            distrito : pdistrito,
        },
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    datatype: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'sucess',
            title: 'Usuario registrado correctamente',
            text: `Bienvenido ${pprimer_nombre} ${psegundo_nombre} ${pprimer_apellido} ${psegundo_apellido}`
        });
    });
    request.fail(function(jqXHR, textStatus){

    });
};

let listar_padre_familia = ()=>{
    let  lista_padres_familia = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_padre_familia",
        method: "GET",
        data: {
            
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
    });

    request.done(function (res) {
        lista_padres_familia = res.padre_familia;
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    return lista_padres_familia;
};