'use strict';

const input_nombre = document.querySelector('#txt_nombre_articulo');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_modificar = document.querySelector('#boton_modificar');


let buscar_parametro = (parametro) =>{
    let url_string = window.location.href;
    let url =  new URL(url_string);
    let id = url.searchParams.get(parametro); //Se toma la url de la pagina actual y se obtiene el valor del parametro 'id criterio'
    return id;
};

let id_articulo = buscar_parametro('id_articulo');

let artículo = buscar_articulo(id_articulo);

let llenar_campos = () =>{
    input_nombre.value = artículo['nombre'];
    input_descripcion.value = artículo['descripcion'];
};

let validar = () => {
    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
};


let obtener_datos = () =>{
    if(!validar()){
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;

        swal.fire({
            type: 'warning',
            title: 'Modificar Artículo',
            text: '¿Seguro que desea modificar este artículo?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                modificar_articulo(id_articulo,nombre,descripcion);
            }
          });
    }
    else{
        swal.fire({
            title: 'No se pudo modificar el artículo',
            text: 'Revise los campos resaltados',
            type: 'warning'
        });
    }
};
btn_modificar.addEventListener('click', obtener_datos);
llenar_campos();