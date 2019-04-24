'use strict';
let eliminar_etiquetas = (pid_centro_educativo, palgo) =>{
  let respuesta = '';
  let peticion = $.ajax({
    url: "http://localhost:4000/api/asignar_etiquetas",
    type:"POST",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    data:{
    }
  });

  peticion.done(function(response){
    respuesta = response;
  });

  peticion.fail(function(response){

  });
};
