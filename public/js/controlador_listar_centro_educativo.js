'use strict';

const tabla = document.querySelector('#instituciones');


let mostrar_datos = () => {
    let instituciones = listar_instituciones();

    for(let i=0; i< instituciones.length; i++){

        document.getElementById('lista_instituciones').innerHTML += 
        

        '<div class="contenedor_institucion">'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion" id="contenedor_informacion">'+

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
        let contenedor_boton = document.createElement('div');
        let boton_ingresar_perfil = document.createElement('button');

        boton_ingresar_perfil.type = 'button';
        boton_ingresar_perfil.textContent = "Ir al Perfil";
        boton_ingresar_perfil.dataset.id_centro_educativo = instituciones[i]['_id'];

        boton_ingresar_perfil.addEventListener('click', visualizar_centro_educativo);

        contenedor_boton.appendChild(boton_ingresar_perfil);
    };
    

    
};

mostrar_datos();

function visualizar_centro_educativo(){
    let id_centro_educativo =  this.dataset.id_centro_educativo;
    localStorage.setItem('centro_educativo', id_centro_educativo );
    // window.location.href = 'perfil_editorial.html';
};