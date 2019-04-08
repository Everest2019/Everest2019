'use strict';

let registrar = (pidioma,piso,pflag) =>{
  let request = $.ajax({
    url:"http://localhost:4000/api/registrar_idioma",
    method: "POST",
    data:{
      iso:piso,
      nombre:pidioma,
      bandera: pflag
    },
    contentType: 'application/x-www-form-urlencoded; charset= UTF-8',
    dataType: "json"
  });

  request.done(function(msg){
    swal.fire({
      type:'success',
      title:'Idioma agregado a configuración',
      text:`El idioma ${pidioma} fue agregado satisfactoriamente`
    });
  });

  request.fail(function (jqXHR, textStatus) {

  });
};

let listar_lenguajes = () =>{
  let listaIdiomas = [];
  let request = $.ajax({
    url:"http://localhost:4000/api/listar_idiomas",
    method:"GET",
    data:{},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res){
    listaIdiomas= res.idiomas;
  });

  request.fail(function(jqXHR, textStatus){
    alert("Request failed: " + textStatus);
  });

   return listaIdiomas;
};
