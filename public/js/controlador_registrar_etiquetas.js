'use strict';

const input_accion = document.querySelector('#txt_accion');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_guardar = document.querySelector('#btn_guardar');

let validar = () => {
    let error = false;
    

    if (input_accion.value == '') {
        error = true;
        input_accion.classList.add('error_input');
    } else {
        input_accion.classList.remove('erorr_input');
    }

    if (input_descripcion.value == ''){
        error = true;
        input_descripcion.classList.add('error_input');
    }else{
        input_descripcion.classList.remove('error_input');
    }

    



    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let accion = input_accion.value;
        let descripcion = input_descripcion.value;
        

        registrar_etiquetas(accion, descripcion);

        swal.fire({
            type : 'success',
            title : 'Etiqueta creada con éxito',
            onClose: () =>{
                window.location.href = 'panel_administrador_etiquetas.html';
            }
        });
        input_accion.value = '';
        input_descripcion.value = '';
    } else {
        swal.fire({
            type: 'warning',
            title: 'Algo ha sucedido',
            text: 'No ha hecho ninguna acción'
        });
    }
    
};

boton_guardar.addEventListener('click', obtener_datos);