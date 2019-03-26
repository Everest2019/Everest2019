'use strict';

'use strict';

const input_titulo = document.querySelector('#txt_titulo');
const input_fecha = document.querySelector('#fecha');
const input_desc = document.querySelector('#desc');
const boton_registrar = document.querySelector('#btn_registrar');

let id_centro_educativo = localStorage.getItem('centro_educativo');


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

    if(input_desc.value ==''){
        error=true;
        input_desc.classList.add('error_input');
        input_fecha.classList.remove('borde');
    }else{
        input_desc.classList.remove('error_input');
    }
    return error;
};

let registrar_datos = () => {
    if(validar()==false){
        let titulo = input_titulo.value;
        let fecha = input_fecha.value;
        let descripcion = input_desc.value;
        console.log("registrado");
        registrar(id_centro_educativo,titulo,fecha,descripcion);
    }else{
        swal.fire({
            type:'warning',
            title:'No se pudo registrar :(',
            text: 'Por favor revise todos los campos'
        });
    }


};

boton_registrar.addEventListener('click',registrar_datos);
