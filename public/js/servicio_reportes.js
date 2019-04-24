let listar_instituciones_mejor_evaluadas = () => {
    let instituciones = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_instituciones_por_evaluacion",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        instituciones = res.instituciones;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return instituciones;

};