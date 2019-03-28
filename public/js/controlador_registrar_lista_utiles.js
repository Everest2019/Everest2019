'use strict';

const input_articulo = document.querySelector('#slt_articulo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion  = document.querySelector('#txt_descripcion');
const boton_guardar = document.querySelector('#btn_guardar');

let validar = ()=>{
    let error = false;

    if(input_articulo.value ==''){
        error=true;
        input_articulo.classList.add('error_input');
    }else{
        input_articulo.classList.remove('error_input');
    }
    
    if(input_cantidad.value==''){
        error=true;
        input_cantidad.classList.add('error_input');
    }else{
        input_cantidad.classList.remove('error_input');
    }

    if(input_descripcion.value==''){
        error=true;
        input_descripcion.classList.add('error_input');
    }else{
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = ()=>{
    if(validar()== false){
        let articulo = input_articulo.value;
        let cantidad = input_cantidad.value;
        let descripcion = input_descripcion.value;

        registrar_utiles(articulo,cantidad, descripcion);
    }else{
        swal.fire({
            type:'warnig',
            title: 'La lsita no pudo ser creada',
            Text:'Por favor revisar los espacios marcados'
        });
    }
};

boton_guardar.addEventListener('click',obtener_datos);