'use strict';
const input_articulo = document.querySelector('#slt_articulo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion = document.querySelector('#txt_descripcion');
const input_articulo_1 = document.querySelector('#slt_articulo_1');
const input_cantidad_1 = document.querySelector('#txt_cantidad_1');
const input_descripcion_1 = document.querySelector('#txt_descripcion_1');
const boton_guardar = document.querySelector('#btn_guardar');

let validar = () =>{
    let error = false;

    if(input_articulo.value == ''){
        error= true;
        input_articulo.classList.add('error_input');
    }else{
        input_articulo.classList.remove('error_input');
    }

    if(input_cantidad.value == ''){
        error=true;
        input_cantidad.classList.add('error_input');
    }else{
        input_cantidad.classList.remove('error_input');
    }
    
    if(input_descripcion.value ==''){
        error=true;
        input_descripcion.classList.add('error_input');
    }else{
        input_descripcion.classList.remove('error_input');
    }

    /*-----------------------------------------------------*/
    if(input_articulo_1.value == ''){
        error= true;
        input_articulo_1.classList.add('error_input');
    }else{
        input_articulo_1.classList.remove('error_input');
    }

    if(input_cantidad_1.value == ''){
        error=true;
        input_cantidad_1.classList.add('error_input');
    }else{
        input_cantidad_1.classList.remove('error_input');
    }
    
    if(input_descripcion_1.value ==''){
        error=true;
        input_descripcion_1.classList.add('error_input');
    }else{
        input_descripcion_1.classList.remove('error_input');
    }
    return error;
};

let obtener_datos = ()=>{
    if(validar()==false){
        //se ejecuta solo si la validacion no da error
        let articulo = input_articulo.value;
        let cantidad = input_cantidad.value;
        let descripcion = input_descripcion.value;
        /*--------------------------------------------------*/

        let articulo_1 = input_articulo_1.value;
        let cantidad_1 = input_cantidad_1.value;
        let descripcion_1 = input_descripcion_1.value;

        /*if(usuario== 'centro_educativo'){
            let tipo_usuario='centro_educativo';
            let id_centro_educativo= localStorage.getItem('id_usuario');
        }else{
            let tipo_usuario ='administrardor';
            let id_centro_educativo=null;

        }*/

        registrar_utiles(articulo, cantidad, descripcion, articulo_1, cantidad_1, descripcion_1);
    }else{
        swal.fire({
            type: 'warning',
            title: 'No se ha podido registrar la lista',
            text: 'Porfavor revice los campos resaltados'
        });
    }
};
boton_guardar.addEventListener('click',obtener_datos);