'use strict';
let registrar_usuario = (pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pcorreo, ptelefono,  pcantidad_hijos, pedad_hijos, pnacionalidad, pidentificacion, ptipo_identificacion, pfoto, pprovincia, pcanton, pdistrito, pestado, ptipo_usuario, pcontrasena)=>{

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
            foto_perfil : pfoto,
            provincia : pprovincia,
            canton : pcanton,
            distrito : pdistrito,
            estado : pestado,
            tipo_usuario : ptipo_usuario,
            contrasena: pcontrasena
        },
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    datatype: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            title: 'Usuario registrado correctamente',
            text: `Bienvenido ${pprimer_nombre} ${pprimer_apellido}`
        });
    });
    request.fail(function(jqXHR, textStatus){

    });
};

let listar_padres_familia = ()=>{
  let lista_padres = [];
  let request = $.ajax({
    url:"http://localhost:4000/api/listar_padre_familia",
    method:"GET",
    data :{

    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res){
    lista_padres = res.padres_de_familia;
  });

  request.fail(function( jqXHR, textStatus ){

  });

  return lista_padres;

};
