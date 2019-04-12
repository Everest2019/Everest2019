'use strict';

const buton_estado = document.querySelector('#btn_usuarios_deshabilitadas');
let lista_padre_familia = listar_padre_familia();
input_filtrar.addEventListener('keyup', mostrar_datos);


mostrar_datos();
function mostrar_datos() {

    const tabla = document.querySelector('#tbl_padres tbody');
    let filtro = input_filtrar.value;
  
    tabla.innerHTML = '';

    for (let i = 0; i < lista_padre_familia.length; i++) {
        if (lista_padre_familia[i]['primer_nombre'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            let celda_foto = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_identificacion = fila.insertCell();
            let celda_tipo_identificacion = fila.insertCell();
            let celda_nacionalidad = fila.insertCell();
            let celda_provincia = fila.insertCell();
            let celda_canton = fila.insertCell();
            let celda_distrito = fila.insertCell();
            let celda_telefono = fila.insertCell();
            let celda_correo = fila.insertCell();
            let celda_cantidad_hijos = fila.insertCell();


            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if(lista_padre_familia[i]['foto_perfil']){
                imagen.src = lista_padre_familia[i]['foto_perfil'];
            }else{
                imagen.src = 'img/user_icon.png';
            }
            celda_foto.appendChild(imagen);

            celda_nombre.innerHTML = lista_padre_familia[i]['primer_nombre'] + ' ' + lista_padre_familia[i]['segundo_nombre'] + ' ' + lista_padre_familia[i]['primer_apellido'] + ' ' + lista_padre_familia[i]['segundo_apellido'];
    
            celda_identificacion.innerHTML = lista_padre_familia[i]['identificacion'];
            celda_tipo_identificacion.innerHTML = lista_padre_familia[i]['tipo_identificacion'];
            celda_nacionalidad.innerHTML = lista_padre_familia[i]['nacionalidad'];
            celda_provincia.innerHTML = lista_padre_familia[i]['provincia'];
            celda_canton.innerHTML = lista_padre_familia[i]['canton'];
            celda_distrito.innerHTML = lista_padre_familia[i]['distrito'];
            celda_telefono.innerHTML = lista_padre_familia[i]['telefono'];
            if (lista_padre_familia['telefono'] != undefined) {
                celda_telefono.innerHTML = lista_padre_familia['telefono'];
            }
            celda_correo.innerHTML = lista_padre_familia[i]['correo'];
            celda_cantidad_hijos.innerHTML = lista_padre_familia[i]['cantidad_hijos'];

        }

    };
};

function usuarios_deshabilitados(){
    window.location.href = 'usuarios_deshabilitados.html';
};


buton_estado.addEventListener('click', usuarios_deshabilitados);