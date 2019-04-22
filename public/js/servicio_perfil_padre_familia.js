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

  
 let eliminar_padre_familia = (pid_padre_familia, pnombre_padre_familia) =>{
  $.ajax({
      url: 'http://localhost:4000/api/eliminar_padre_familia',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      data: {
          id_padre_familia : pid_padre_familia
      },
      beforeSend: function beforeSend() {
          
      },
      success: function success(response) {
        let detalle = "Padre familia eliminado";
        let usuario = pnombre_padre_familia;
        let fecha = new Date();
        
        registrar_accion(usuario,detalle,fecha);
      },
      error: function error(_error) {
          console.log("Request fail error:" + _error);
      }
  });
};