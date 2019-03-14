'use strict';
let registrar_usuario = (pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pidentificacion, pcantidad_hijos, pedad_hijos, pprovincia, pcanton, pdistrito)=>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_padre_familia",
        method: "POST",
        data: {
            primer_nombre : pprimer_nombre,
            segundo_nombre : psegundo_nombre,
            primer_apellido : pprimera_pellido,
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
            text: `Bienvenido ${pprimer_nombre} ${psegundo_nombre} ${pprimera_pellido} ${psegundo_apellido}`
        });
    });
    request.fail(function(jqXHR, textStatus){

    });
};