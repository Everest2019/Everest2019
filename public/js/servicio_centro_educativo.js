'use strict';

let registrar_centro_educativo = (pnombre_institucion, pcorreo_institucion, pcedula_institucion, ptipo_institucion, ptipo_sistema, ptipo_colegio, pprovincia, pcanton, pdistrito, pdireccion_exacta, platitud, plongitud, pidioma, preligion, pensenanza, pdescripcion_institucion, preferencia_historica, pano_fundacion, pmatricula, pmensualidad, pportada, pgaleria1, pgaleria2, pgaleria3, pgaleria4, ptelefono, pfax, pweb, pfacebook, pinstagram, ptwitter, pyoutube, plogo, pdocumento1, pdocumento2, pdocumento3, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pcorreo_encargado, pdepartamento, ptelefono_encargado, pextension, pidentificacion, pfotografia_encargado, paprobado, pestado, ptipo_usuario, pcontrasena) =>{

   let request = $.ajax({
       url: "http://localhost:4000/api/registrar_centro_educativo",
       method: "POST",
       data: { 
            nombre_comercial : pnombre_institucion,
            cedula_juridica : pcedula_institucion,
            tipo_institucion : ptipo_institucion,
            modalidad : ptipo_sistema,
            tipo_colegio : ptipo_colegio,
            distrito : pdistrito,
            canton : pcanton,
            provincia : pprovincia,
            direccion_exacta : pdireccion_exacta,
            ubicacion_mapa_lat : platitud,
            ubicacion_mapa_lng : plongitud,
            ano_creacion : pano_fundacion,
            referencia_historica : preferencia_historica,
            informacion_general : pdescripcion_institucion,
            telefono : ptelefono,
            fax : pfax,
            pagina_web : pweb,
            correo : pcorreo_institucion,
            facebook : pfacebook,
            twitter : ptwitter,
            instagram : pinstagram,
            youtube : pyoutube,
            logo: plogo,
            matricula : pmatricula,
            mensualidad : pmensualidad,
            imagen_portada : pportada,
            galeria1 : pgaleria1,
            galeria2 : pgaleria2,
            galeria3 : pgaleria3,
            galeria4 : pgaleria4,
            informacion_idioma : pidioma,
            informacion_religion : preligion,
            informacion_ensenanza : pensenanza,
            documento1: pdocumento1,
            documento2: pdocumento2,
            documento3: pdocumento3,
            primer_nombre : pprimer_nombre,
            segundo_nombre : psegundo_nombre,
            primer_apellido : pprimer_apellido,
            segundo_apellido : psegundo_apellido,
            correo_encargado : pcorreo_encargado,
            departamento : pdepartamento,
            telefono_encargado : ptelefono_encargado,
            extension : pextension,
            identificacion : pidentificacion,
            fotografia_encargado: pfotografia_encargado,
            aprobado : paprobado,
            estado : pestado,

            tipo_usuario: ptipo_usuario,
            contrasena: pcontrasena
       },
       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
       dataType: "json",
       async: false
     });
      
     request.done(function( msg ) {

       swal.fire({
           type: 'success',
           title: 'Centro Educativo agregado correctamente',
           text: `El Centro Educativo ${pnombre_institucion} ha sido agregado correctamente`,
           onClose: () => {
            window.location.href = './iniciar_sesion.html';
          }
       });
      
     });
      
     request.fail(function( jqXHR, textStatus ) {
      
     }); 
};

let registrar_servicio = (pcedula_juridica, pservicio) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/registrar_servicio",
      method: "POST",
      data: {
          cedula_juridica: pcedula_juridica,
          servicio: pservicio
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });
  request.done(function (msg) {
    console.log('Servicio agregado correctamente');
  });

  request.fail(function (jqXHR, textStatus) {
      alert("Request failed:" + textStatus);
  });

};

let agregar_centro_educativo_favorito = (pid_centro_educativo, pid_usuario, pnombre_institucion) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/agregar_favorito",
      method: "POST",
      data: {
          id_centro_educativo: pid_centro_educativo,
          id_usuario : pid_usuario
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });
  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Agregado a favoritos',
      text: `${pnombre_institucion} ahora aparecerá en tu lista de favoritos`,
      onClose: () => {
        window.location.href = './perfil_centro_educativo_general.html';
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
      
  });

};
let registrar_solicitudes = (pid_centro_educativo, pid_usuario) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/registrar_solicitudes",
      method: "POST",
      data: {
          id_centro_educativo: pid_centro_educativo,
          id_usuario : pid_usuario
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });
  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Solicitud agregada',
      text: `Solicitud agregada`,
      onClose: () => {
        window.location.href = './perfil_centro_educativo_general.html';
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
      
  });

};
let eliminar_centro_educativo_favorito = (pid_usuario, pid_centro_educativo, pnombre_institucion) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/eliminar_favorito",
      method: "POST",
      data: {
          id_usuario : pid_usuario,
          id_centro_educativo: pid_centro_educativo
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });
  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Removido de favoritos',
      text: `${pnombre_institucion} ya no aparecerá en tu lista de favoritos`,
      onClose: () => {
        window.location.href = './perfil_centro_educativo_general.html';
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
      
  });

};

let listar_instituciones = () => {
  let lista_instituciones = [];
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
    lista_instituciones = res.instituciones;
    
  });
   
  request.fail(function( jqXHR, textStatus ) {
   
  });
  return lista_instituciones;
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

//Buscar centros educativos favoritos de un padre de familia
function buscar_favoritos_padre_familia(pid_padre_familia){
  let favoritos = [];
  $.ajax({
      url: 'http://localhost:4000/api/buscar_favoritos_padre_familia',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      async: false,
      data: {
          id_padre_familia : pid_padre_familia
      },
      beforeSend: function beforeSend() {
            
      },
      success: function success(response) {
        favoritos = response;
          
      },
      error: function error(_error) {
          console.log("Request fail error:" + _error);
      }
  });

  return favoritos;
};

//MODIFICAR
let actualizar_centro_educativo = (pnombre_institucion, pcorreo_institucion, pcedula_institucion, ptipo_institucion, ptipo_sistema, ptipo_colegio, pprovincia, pcanton, pdistrito, pdireccion_exacta, platitud, plongitud, pidioma, preligion, pensenanza, pdescripcion_institucion, preferencia_historica, pano_fundacion, pmatricula, pmensualidad, pportada, pgaleria1, pgaleria2, pgaleria3, pgaleria4, ptelefono, pfax, pweb, pfacebook, pinstagram, ptwitter, pyoutube, plogo, pdocumento1, pdocumento2, pdocumento3, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pcorreo_encargado, pdepartamento, ptelefono_encargado, pextension, pidentificacion, pfotografia_encargado, paprobado, pestado, ptipo_usuario, pcontrasena, pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_centro_educativo",
      method: "POST",
      data: {
        nombre_comercial : pnombre_institucion,
            cedula_juridica : pcedula_institucion,
            tipo_institucion : ptipo_institucion,
            modalidad : ptipo_sistema,
            tipo_colegio : ptipo_colegio,
            distrito : pdistrito,
            canton : pcanton,
            provincia : pprovincia,
            direccion_exacta : pdireccion_exacta,
            ubicacion_mapa_lat : platitud,
            ubicacion_mapa_lng : plongitud,
            ano_creacion : pano_fundacion,
            referencia_historica : preferencia_historica,
            informacion_general : pdescripcion_institucion,
            telefono : ptelefono,
            fax : pfax,
            pagina_web : pweb,
            correo : pcorreo_institucion,
            facebook : pfacebook,
            twitter : ptwitter,
            instagram : pinstagram,
            youtube : pyoutube,
            logo: plogo,
            matricula : pmatricula,
            mensualidad : pmensualidad,
            imagen_portada : pportada,
            galeria1 : pgaleria1,
            galeria2 : pgaleria2,
            galeria3 : pgaleria3,
            galeria4 : pgaleria4,
            informacion_idioma : pidioma,
            informacion_religion : preligion,
            informacion_ensenanza : pensenanza,
            documento1: pdocumento1,
            documento2: pdocumento2,
            documento3: pdocumento3,
            primer_nombre : pprimer_nombre,
            segundo_nombre : psegundo_nombre,
            primer_apellido : pprimer_apellido,
            segundo_apellido : psegundo_apellido,
            correo_encargado : pcorreo_encargado,
            departamento : pdepartamento,
            telefono_encargado : ptelefono_encargado,
            extension : pextension,
            identificacion : pidentificacion,
            fotografia_encargado: pfotografia_encargado,
            aprobado : paprobado,
            estado : pestado,

            tipo_usuario: ptipo_usuario,
            contrasena: pcontrasena,
           id : pid
      },
      datatype: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });
  request.done(function (res) {

      swal.fire({
          type: 'success',
          title: 'Centro educativo modificado correctamente',
          text: res.msg,
          onClose: () => {
              window.location.href = 'panel_control_centro_educativo.html';
            }  
      });

  });
  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};
