'use strict';

const btn_informacion = document.querySelector('#btn_informacion');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='padre_familia'){
    window.location.href = `iniciar_sesion.html`;
}

let id_padre_familia = localStorage.getItem('id_usuario');

let obtener_datos = () => {

        let centro_educativo = id_centro_educativo;
        let padre_familia = id_padre_familia;
        let id = localStorage.getItem('_id');

        Swal.fire({
            title: 'Está seguro que desea registar la solicitud?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
                registrar_solicitud(centro_educativo, padre_familia);
            }
          })  
    }


    btn_informacion.addEventListener('click', obtener_datos);