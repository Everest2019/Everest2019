'use strict';

const input_titulo = document.querySelector('#txt_titulo');
const input_fecha = document.querySelector('#input_fecha');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_registrar = document.querySelector('#btn_registrar');



document.querySelector("#input_fecha").valueAsDate = new Date();
let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);



let validar = () =>{
    let error = false;

    if(input_titulo.value==''){
        error=true;
        input_titulo.classList.add('error_input');
        input_fecha.classList.remove('borde');
    }else{
        input_titulo.classList.remove('error_input');
    }

    if(input_fecha.value ==''){
        error=true;
        input_fecha.classList.add('error_input');
        input_fecha.classList.remove('borde');
    }else{
        input_fecha.classList.remove('error_input');
    }

    if(input_descripcion.value ==''){
        error=true;
        input_descripcion.classList.add('error_input');
        input_descripcion.classList.remove('borde');
    }else{
        input_descripcion.classList.remove('error_input');
    }
    return error;
};

let registrar_datos = () => {
    if(validar()==false){
      let titulo = input_titulo.value;
      let fecha = input_fecha.value;
      let descripcion = input_descripcion.value;
        registrar(id_centro_educativo,titulo,fecha,descripcion, centro_educativo['nombre_comercial']);
      limpiarFormulario();
    }else{
        swal.fire({
            type:'warning',
            title:'No se pudo registrar',
            text: 'Por favor revise los campos resaltados'
        });
    }


};

let limpiarFormulario = () => {
  input_titulo.value='';
  input_fecha.value='';
  input_descripcion.value='';
};

boton_registrar.addEventListener('click',registrar_datos);
