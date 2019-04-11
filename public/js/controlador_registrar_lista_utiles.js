'use strict';
const input_articulo = document.querySelector('#slt_articulo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion = document.querySelector('#txt_descripcion');
const input_articulo_1 = document.querySelector('#slt_articulo_1');
const input_cantidad_1 = document.querySelector('#txt_cantidad_1');
const input_descripcion_1 = document.querySelector('#txt_descripcion_1');

const input_articulo_2 = document.querySelector('#slt_articulo_2');
const input_cantidad_2 = document.querySelector('#txt_cantidad_2');
const input_descripcion_2 = document.querySelector('#txt_descripcion_2');


const input_articulo_3 = document.querySelector('#slt_articulo_3');
const input_cantidad_3 = document.querySelector('#txt_cantidad_3');
const input_descripcion_3 = document.querySelector('#txt_descripcion_3');


const input_articulo_4 = document.querySelector('#slt_articulo_4');
const input_cantidad_4 = document.querySelector('#txt_cantidad_4');
const input_descripcion_4 = document.querySelector('#txt_descripcion_4');

const input_articulo_5 = document.querySelector('#slt_articulo_5');
const input_cantidad_5 = document.querySelector('#txt_cantidad_5');
const input_descripcion_5 = document.querySelector('#txt_descripcion_5');

const input_articulo_6 = document.querySelector('#slt_articulo_6');
const input_cantidad_6 = document.querySelector('#txt_cantidad_6');
const input_descripcion_6 = document.querySelector('#txt_descripcion_6');

const input_articulo_7 = document.querySelector('#slt_articulo_7');
const input_cantidad_7 = document.querySelector('#txt_cantidad_7');
const input_descripcion_7 = document.querySelector('#txt_descripcion_7');

const input_articulo_8= document.querySelector('#slt_articulo_8');
const input_cantidad_8= document.querySelector('#txt_cantidad_8');
const input_descripcion_8 = document.querySelector('#txt_descripcion_8');

const input_articulo_9 = document.querySelector('#slt_articulo_9');
const input_cantidad_9 = document.querySelector('#txt_cantidad_9');
const input_descripcion_9 = document.querySelector('#txt_descripcion_9');

const input_articulo_10 = document.querySelector('#slt_articulo_10');
const input_cantidad_10 = document.querySelector('#txt_cantidad_10');
const input_descripcion_10 = document.querySelector('#txt_descripcion_10');

const input_articulo_11 = document.querySelector('#slt_articulo_11');
const input_cantidad_11 = document.querySelector('#txt_cantidad_11');
const input_descripcion_11 = document.querySelector('#txt_descripcion_11');

const input_articulo_12 = document.querySelector('#slt_articulo_12');
const input_cantidad_12 = document.querySelector('#txt_cantidad_12');
const input_descripcion_12 = document.querySelector('#txt_descripcion_12');

const input_articulo_13 = document.querySelector('#slt_articulo_13');
const input_cantidad_13 = document.querySelector('#txt_cantidad_13');
const input_descripcion_13 = document.querySelector('#txt_descripcion_13');

const input_articulo_14 = document.querySelector('#slt_articulo_14');
const input_cantidad_14 = document.querySelector('#txt_cantidad_14');
const input_descripcion_14 = document.querySelector('#txt_descripcion_14');
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

    /*-----------------------------------------------------
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
    */
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

        let articulo_2 = input_articulo_2.value;
        let cantidad_2 = input_cantidad_2.value;
        let descripcion_2 = input_descripcion_2.value;

        /*if(usuario== 'centro_educativo'){
            let tipo_usuario='centro_educativo';
            let id_centro_educativo= localStorage.getItem('id_usuario');
        }else{
            let tipo_usuario ='administrardor';
            let id_centro_educativo=null;

        }*/

        let articulo_3 = input_articulo_3.value;
        let cantidad_3 = input_cantidad_3.value;
        let descripcion_3 = input_descripcion_3.value;
        
        let articulo_4 = input_articulo_4.value;
        let cantidad_4 = input_cantidad_4.value;
        let descripcion_4 = input_descripcion_4.value;

        let articulo_5 = input_articulo_5.value;
        let cantidad_5 = input_cantidad_5.value;
        let descripcion_5 = input_descripcion_5.value;

        let articulo_6 = input_articulo_6.value;
        let cantidad_6 = input_cantidad_6.value;
        let descripcion_6 = input_descripcion_6.value;

        let articulo_7 = input_articulo_7.value;
        let cantidad_7 = input_cantidad_7.value;
        let descripcion_7 = input_descripcion_7.value;

        let articulo_8 = input_articulo_8.value;
        let cantidad_8 = input_cantidad_8.value;
        let descripcion_8 = input_descripcion_8.value;

        let articulo_9 = input_articulo_9.value;
        let cantidad_9 = input_cantidad_9.value;
        let descripcion_9 = input_descripcion_9.value;

        let articulo_10 = input_articulo_10.value;
        let cantidad_10 = input_cantidad_10.value;
        let descripcion_10 = input_descripcion_10.value;

        let articulo_11 = input_articulo_11.value;
        let cantidad_11 = input_cantidad_11.value;
        let descripcion_11 = input_descripcion_11.value;

        let articulo_12 = input_articulo_12.value;
        let cantidad_12 = input_cantidad_12.value;
        let descripcion_12 = input_descripcion_12.value;

        let articulo_13 = input_articulo_13.value;
        let cantidad_13 = input_cantidad_13.value;
        let descripcion_13 = input_descripcion_13.value;

        let articulo_14 = input_articulo_14.value;
        let cantidad_14 = input_cantidad_14.value;
        let descripcion_14 = input_descripcion_14.value;


        registrar_utiles(articulo, cantidad, descripcion, articulo_1, cantidad_1, descripcion_1, articulo_2, cantidad_2, descripcion_2, articulo_3, cantidad_3, descripcion_3, articulo_4, cantidad_4, descripcion_4, articulo_5, cantidad_5, descripcion_5, articulo_6, cantidad_6, descripcion_6, articulo_7, cantidad_7, descripcion_7, articulo_8, cantidad_8, descripcion_8, articulo_9, cantidad_9, descripcion_9, articulo_10, cantidad_10, descripcion_10, articulo_11, cantidad_11, descripcion_11, articulo_12, cantidad_12, descripcion_12, articulo_13, cantidad_13, descripcion_13, articulo_14, cantidad_14, descripcion_14);
    }else{
        swal.fire({
            type: 'warning',
            title: 'No se ha podido registrar la lista',
            text: 'Porfavor revice los campos resaltados'
        });
    }
};
boton_guardar.addEventListener('click',obtener_datos);