'use strict';

function validar_credenciales(pcorreo, pcontrasena){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/validar_credenciales',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
           correo : pcorreo,
           contrasena : pcontrasena
        }
      });
      peticion.done(function(response){
        respuesta = response;
        localStorage.setItem('conectado', response.success);
        localStorage.setItem('id_usuario', response.id);
        localStorage.setItem('tipo_usuario', response.tipo_usuario);
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};