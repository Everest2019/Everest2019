'use strict';
let contrasena = (pcorreo, pcontrasena, pconfirmar_contrasena) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/contrasena",
        method: "POST",
        data: {
            correo: pcorreo,
            contrasenna: pcontrasena,
            confirmar_contrasena: pconfirmar_contrasena
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se creo correctamente',
            text: `La contraseña ${pcontrasena} fue creada correctamente, con el correo ${pcorreo}`
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });

 
}