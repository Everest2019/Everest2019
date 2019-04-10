'use strict';

const lista_instituciones = document.querySelector('#lista_instituciones');
const input_filtrar = document.querySelector('#txt_buscar_centro_educativo');
let instituciones = listar_instituciones();
let padre = localStorage.getItem('id_usuario');
let padre_familia = buscar_padre_familia(padre);

let mostrar_datos = () => {

let filtro = input_filtrar.value;
lista_instituciones.innerHTML ='';

    for(let i = 0; i < padre_familia['favoritos'].length; i++){

        for (let j = 0; j < instituciones.length; j++) {

        if(padre_familia['favoritos'][i]['id_centro_educativo'] == instituciones[j]['_id']){
            if(instituciones[j]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())){

            document.getElementById('lista_instituciones').innerHTML +=


            '<div class="contenedor_institucion">'+
            '<div class="contenedor_nombre_institucion">'+
                '<p>' + instituciones[j]['nombre_comercial'] + ' </p>' +
            '</div>'+
                '<img src="' + instituciones[j]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

                    '<div class="contenedor_clasificacion_centro_educativo">'+

                        '<div class="contenedor_tipo">'+
                            '<p>' + instituciones[j]['tipo_institucion'] + '</p>'+
                        '</div>' + 

                        '<div class="contenedor_division">'+
                            '<p>/</p>'+
                        '</div>'+

                        '<div class="contenedor_sistema">'+
                            '<p>'+ instituciones[j]['modalidad'] + '</p>'+
                        '</div>'+
                    '</div>'+

                    '<div class="contenedor_telefono_centro_educativo">'+
                        '<p>'+ instituciones[j]['telefono'] + '</p>'+
                    '</div>'+

                    '<div class="contenedor_ubicacion_centro_educativo">'+

                        '<div class="contenedor_provincia">'+
                            '<p>' + instituciones[j]['provincia'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_canton">'+
                            '<p>'+ instituciones[j]['canton'] + '</p>'+
                        '</div>'+
                    '</div>'+
                    
                    
                    '<div data-institucion="' + instituciones[j]['_id'] +'" id="institucion' + j + '" class="contenedor_boton">'+

                         //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                         ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+j +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+
                       
                    '</div>'+
                    
                '</div>'+
            '</div>'
            }
        };



        };

    

    };

};

mostrar_datos();


input_filtrar.addEventListener('keyup', mostrar_datos);

function visualizar_centro_educativo(pid_centro_educativo){
    
    localStorage.setItem('centro_educativo', pid_centro_educativo);
    window.location.href = 'perfil_centro_educativo_general.html';
};