'use strict';

let listar_preguntas = ()=>{
  let preguntas = [];
  let request = $.ajax({
      url:"",
      method:"",
      data:{
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async:false
    });

    request.done(function (res) {
        preguntas = res.preguntas;
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    return preguntas;
};

