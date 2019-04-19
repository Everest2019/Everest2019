'use strict';

const input_articulo = document.querySelectorAll('#slt_articulo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_actualizar = document.querySelector('#btn_guardar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};

let _id = get_param('id_lista_utiles');

let lista_utiles = buscar_lista_utiles(_id);

let validar = () => {
    let error = false;


    if (input_cantidad.value == '') {
        error = true;
        input_cantidad.classList.add('error_input');
    } else {
        input_cantidad.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
};

let mostrar_datos = ()=>{
    
    input_articulo.value = lista_utiles[0]['articulo'];
    input_cantidad.value = lista_utiles[0]['cantidad'];
    input_descripcion.value = lista_utiles[0]['descripcion'];
};

if(lista_utiles){
    mostrar_datos();
}

let obtener_datos = () => {
    if (validar() == false) {
        let articulo = input_articulo.value;
        let cantidad = input_cantidad.value;
        let descripcion = input_descripcion.value;

       // registrar_utiles(articulo, cantidad, descripcion)

        Swal.fire({
            title: 'Está seguro que desea actualizar el articulo de la lista ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                actualizar_lista_utiles(articulo, cantidad, descripcion, _id);
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

boton_actualizar.addEventListener('click', obtener_datos);