'use strict';

const input_descripcion = document.querySelector('#txt_descripcion');
const btn_agregar = document.querySelector('#boton_agregar');

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

        registrar_criterio(descripcion);
    }
    else{
        swal.fire({
            title: 'No se pudo agregar el criterio',
            text: 'Revise los campos resaltados',
            type: 'warning'
        });
    }
};

btn_agregar.addEventListener('click', obtener_datos);