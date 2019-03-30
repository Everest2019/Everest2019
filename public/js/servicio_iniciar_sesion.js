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

        if(response.tipo_usuario == 'administrador'){
          window.location.href = 'panel_administrador_inicio.html';
        }
        if(response.tipo_usuario == 'padre_familia'){
          window.location.href = 'perfil_padre_familia.html';
        }
        if(response.tipo_usuario == 'centro_educativo'){
          window.location.href = 'panel_control_centro_educativo.html';
        }
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};
