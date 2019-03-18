'use strict';

const tabla = document.querySelector('#instituciones');

let mostrar_datos = () => {
    let instituciones = listar_instituciones();

    for(let i=0; i< instituciones.length; i++){

        document.getElementById('lista_instituciones').innerHTML += 
        

        '<div class="contenedor_institucion">'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

                    '<div class="contenedor_nombre_centro_educativo">'+
                        '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                   ' </div>'+

                    '<div class="contenedor_clasificacion_centro_educativo">'+

                        '<div class="contenedor_tipo">'+
                            '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                        '</div>' + 

                        '<div class="contenedor_division">'+
                            '<p>/</p>'+
                        '</div>'+

                        '<div class="contenedor_sistema">'+
                            '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                        '</div>'+
                    '</div>'+

                    '<div class="contenedor_telefono_centro_educativo">'+
                        '<p>'+ instituciones[i]['telefono'] + '</p>'+
                    '</div>'+

                    '<div class="contenedor_ubicacion_centro_educativo">'+

                        '<div class="contenedor_provincia">'+
                            '<p>' + instituciones[i]['provincia'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_canton">'+
                            '<p>'+ instituciones[i]['canton'] + '</p>'+
                        '</div>'+
                    '</div>'+
                    
                    '<div class="contenedor_web_centro_educativo">'+
                        '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                    '</div>'+
                    
                '</div>'+
            '</div>'
    };
};

mostrar_datos();