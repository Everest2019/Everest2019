'use strict';

const input_titulo = document.querySelector('#txt_titulo');
const input_fecha = document.querySelector('#input_fecha');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_registrar = document.querySelector('#btn_registrar');

document.querySelector("#input_fecha").valueAsDate = new Date();

let id_centro_educativo = localStorage.getItem('centro_educativo');

let validar = () =>{
    let error = false;
    
    if(input_titulo.value==''){
        error=true;
        input_titulo.classList.add('error_input');
    }else{
        input_titulo.classList.remove('error_input');
    }

    if(input_fecha.value ==''){
        error=true;
        input_fecha.classList.add('error_input');
    }else{
        input_fecha.classList.remove('error_input');
    }

    if(input_descripcion.value ==''){
        error=true;
        input_descripcion.classList.add('error_input');
    }else{
        input_descripcion.classList.remove('error_input');
    }
    return error;
};

let registrar_datos = () => {
    if(validar()==false){
        let centro_educativo = id_centro_educativo;
        let titulo = input_titulo.value;
        let fecha = input_fecha.value;
        let descripcion = input_descripcion.value;
        registrar(centro_educativo,titulo,fecha,descripcion);
    }else{
        swal.fire({
            type:'warning',
            title:'No se pudo registrar',
            text: 'Por favor revise los campos resaltados'
        });
    }
   
 
};

boton_registrar.addEventListener('click',registrar_datos);