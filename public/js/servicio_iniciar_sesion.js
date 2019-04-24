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
          window.location.href = 'index.html';
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


function agregar_contrasena(pcorreo, pcodigo_verificacion, pcontrasena){
  let respuesta = '';
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/agregar_contrasena',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
         correo : pcorreo,
         codigo_verificacion: pcodigo_verificacion,
         contrasena : pcontrasena
      }
    });
    peticion.done(function(response){
      respuesta = response;

        let detalle = "Padre familia verificado";
        let usuario = respuesta.nombre + ' ' + respuesta.apellido;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);


      swal.fire({
        type: 'success',
        title: 'Código de verificación aceptado',
        text: 'Su contraseña ha sido agregada correctamente',
        onClose: () =>{
          window.location.href = 'Iniciar_sesion.html';
        }
      })
    });
  
    peticion.fail(function(response){
      respuesta = response;
    });

   return respuesta; 
};
