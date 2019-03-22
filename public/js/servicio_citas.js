'use strict';

let registrar_cita = (pid_centro_educativo, pid_padre_familia, pfecha, phora, pcomentario) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_cita",
        method: "POST",
        data: {
            id_padre_familia: pid_padre_familia,
            id_centro_educativo: pid_centro_educativo,
            fecha: pfecha,
            hora: phora,
            comentario: pcomentario
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Cita creada correctamente',
            text: `Su cita con el centro educativo ha sido creada correctamente`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus);
    });

};