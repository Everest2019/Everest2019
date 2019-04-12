'use strict';


const boton_registrar = document.querySelector('#btn_informacion');


let id_padre_familia = localStorage.getItem('id_usuario');

let obtener_datos = () => {

        let centro_educativo = id_centro_educativo;
        let padre_familia = id_padre_familia;

  
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


boton_registrar.addEventListener('click', obtener_datos);