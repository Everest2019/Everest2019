'use strict';

const input_accion = document.querySelector('#txt_accion');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_guardar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};

let _id = get_param('id_etiquetas');

let etiquetas = buscar_etiquetas(_id); //se levantan los datos de ese inmueble bajo demanda usando su id


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


let mostrar_datos = () =>{
    input_accion.value = etiquetas[0]['accion'];
    input_descripcion.value = etiquetas[0]['descripcion'];

};

if(etiquetas){
    mostrar_datos();
}


let obtener_datos = () => {

    if (validar() == false) {
        let accion = input_accion.value;
        let descripcion = input_descripcion.value;

        Swal.fire({
            title: ' Está seguro que desea actualizar la etiqueta ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
                actualizar_etiquetas(accion, descripcion, _id);
            }
          })

    } else {
        swal.fire({
            type: 'warning',
            title: 'Algo ha sucedido',
            text: 'No ha hecho ninguna acción'
        });
        
    }
};

boton_guardar.addEventListener('click', obtener_datos);
