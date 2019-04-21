'use strict';

const input_descripcion = document.querySelector('#txt_descripcion');
const btn_modificar = document.querySelector('#boton_modificar');


let buscar_parametro = (parametro) =>{
    let url_string = window.location.href;
    let url =  new URL(url_string);
    let id = url.searchParams.get(parametro); //Se toma la url de la pagina actual y se obtiene el valor del parametro 'id criterio'
    return id;
};

let id_criterio = buscar_parametro('id_criterio');

let criterio_evaluacion = buscar_criterio(id_criterio);

let llenar_campos = () =>{
    input_descripcion.value = criterio_evaluacion['nombre'];
};

let validar_datos = () =>{
    let error = false;

    if(input_descripcion.value == ''){
        error = true;
        input_descripcion.classList.remove('borde');
        input_descripcion.classList.add('input_error');
    }
    else{
        input_descripcion.classList.remove('input_error');
        input_descripcion.classList.add('borde');
    }

    return error;
};


let obtener_datos = () =>{
    if(!validar_datos()){
        let descripcion = input_descripcion.value;

        swal.fire({
            type: 'warning',
            title: 'Modificar Criterio',
            text: '¿Seguro que desea modificar este criterio de evaluación?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                modificar_criterio(id_criterio,descripcion);
            }
          });
    }
    else{
        swal.fire({
            title: 'No se pudo modificar el criterio',
            text: 'Revise los campos resaltados',
            type: 'warning'
        });
    }
};
btn_modificar.addEventListener('click', obtener_datos);
llenar_campos();