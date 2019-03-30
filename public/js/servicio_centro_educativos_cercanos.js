'use strict';

let listar_instituciones = () => {
  let input_filtrar = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_instituciones",
    method: "GET",
    data: { 
        
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });
   
  request.done(function( res ) {
    input_filtrar = res.instituciones;
    
  });
   
  request.fail(function( jqXHR, textStatus ) {
   
  });
  return input_filtrar;
};

//Buscar centro educativo para mostar en el perfil del
function buscar_centro_educativo(pid_centro_educativo){
  let centro_educativo = [];
  $.ajax({
      url: 'http://localhost:4000/api/buscar_centro_educativo',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      async: false,
      data: {
          id : pid_centro_educativo
      },
      beforeSend: function beforeSend() {
            
      },
      success: function success(response) {
        centro_educativo = response;
          
      },
      error: function error(_error) {
          console.log("Request fail error:" + _error);
      }
  });

  return centro_educativo;
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