'use strict';

const input_descripcion = document.querySelector('#txt_descripcion');
const input_valor = document.querySelector('#input_valor');
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

    if(input_valor.value == '' ){
        error = true;
        input_valor.classList.remove('borde');
        input_valor.classList.add('input_error');
    }
    else{
        input_valor.classList.remove('input_error');
        input_valor.classList.add('borde');
    }

    return error;
};


let obtener_datos = () =>{
    if(!validar_datos()){
        let descripcion = input_descripcion.value;
        let valor = input_valor.value;

        registrar_criterio(descripcion,valor);
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