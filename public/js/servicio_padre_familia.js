'use strict';
let registrar_usuario = (pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pcorreo, ptelefono, pcantidad_hijos, pedad_hijos, pnacionalidad, pidentificacion, ptipo_identificacion, pprovincia, pcanton, pdistrito)=>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_padre_familia",
        method: "POST",
        data: {
            primer_nombre : pprimer_nombre,
            segundo_nombre : psegundo_nombre,
            primer_apellido : pprimer_apellido,
            segundo_apellido : psegundo_apellido,
            correo : pcorreo,
            telefono : ptelefono,
            cantidad_hijos :pcantidad_hijos,
            edad_hijos : pedad_hijos,
            nacionalidad : pnacionalidad,
            identificacion : pidentificacion,
            tipo_identificacion : ptipo_identificacion,
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
            text: `Bienvenido ${pprimer_nombre} ${pprimer_apellido}`
        });
    });
    request.fail(function(jqXHR, textStatus){

    });
};