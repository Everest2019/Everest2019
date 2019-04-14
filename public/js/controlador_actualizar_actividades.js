'use strict';

const input_titulo = document.querySelector('#txt_titulo');
const input_fecha = document.querySelector('#dt_fecha');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_actualizar = document.querySelector('#btn_registrar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('id_actividades');

let actividades = buscar_actividades(_id); //se levantan los datos de ese inmueble bajo demanda usando su id


let validar = () => {
    let error = false;

    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }
    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input')
    }
    return error;
};


let mostrar_datos = () => {
    input_titulo.value = actividades[0]['titulo'];
    input_fecha.value = actividades[0]['fecha'];
    input_descripcion.value = actividades[0]['descripcion'];

}

if (actividades) {
    mostrar_datos();
}

let obtener_datos = () => {

    if (validar() == false) {
        let titulo = input_titulo.value;
        let fecha = input_fecha.value;
        let descripcion = input_descripcion.value;

        registrar_actividades( titulo, fecha, descripcion);

        Swal.fire({
            title: 'Está seguro que desea actualizar la actividad ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro',
           
        }).then((result) => {
            if (result.value) {
                actualizar_actividades( titulo, fecha, descripcion, _id);
            }
        })

    } else {
        swal.fire({
            type: 'warning',
            title: 'La actividad no fue actualizada'
        });
    }
};

boton_actualizar.addEventListener('click',obtener_datos);