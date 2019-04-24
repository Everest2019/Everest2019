'use strict';

const lista_instituciones = document.querySelector('#lista_instituciones');
const input_filtrar = document.querySelector('#txt_buscar_centro_educativo');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='padre_familia'){
    window.location.href = `iniciar_sesion.html`;
}

let instituciones = listar_instituciones();
let padre = localStorage.getItem('id_usuario');
let padre_familia = buscar_padre_familia(padre);



let mostrar_datos = () => {

let filtro = input_filtrar.value;
lista_instituciones.innerHTML ='';

    

    for (let i = 0; i < instituciones.length; i++) {

        if(instituciones[i]['canton'].includes(padre_familia['canton']) && instituciones[i]['aprobado'] && instituciones[i]['estado']){
            if(instituciones[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())){

            document.getElementById('lista_instituciones').innerHTML +=


            '<div class="contenedor_institucion">'+
            '<div class="contenedor_nombre_institucion">'+
                '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
            '</div>'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

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
                    
                    
                    '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                         //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                         ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+
                       
                    '</div>'+
                    
                '</div>'+
            '</div>'
            }
        };



    };

    

    

};

mostrar_datos();


input_filtrar.addEventListener('keyup', mostrar_datos);

function visualizar_centro_educativo(pid_centro_educativo){
    
    localStorage.setItem('centro_educativo', pid_centro_educativo);
    window.location.href = 'perfil_centro_educativo_general.html';
};