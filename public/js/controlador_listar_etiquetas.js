'use strict';

const input_filtro = document.querySelector('#txt_filtar');
const tabla = document.querySelector('#tbl_etiquetas tbody');
const btn_agregar_etiquetas = document.querySelector('#btn_agregar');
const boton_eliminar = document.querySelector('#btn_modificar_etiqueta');

let etiquetas = listar_etiquetas();

let mostrar_datos = () => {


    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < etiquetas.length; i++) {
        if (etiquetas[i]['accion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = etiquetas[i]['accion'];
            fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
            // se crea una nueva celda para el boton de editar 
            let celda_configuracion = fila.insertCell();

            //creacion del boton de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_etiquetas.html?id_etiquetas=${etiquetas[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);
            // se crea una celda para el boton eliminar
            celda_configuracion = fila.insertCell();

            //se crea el boton eliminar
            
            let boton_eliminar = document.createElement('a');
            boton_eliminar.textContent = 'Eliminar';
            boton_eliminar.href = "#";
            boton_eliminar.dataset.id_etiqueta = etiquetas[i]
            ['_id'];
            boton_eliminar.addEventListener('click', confirmar_borrado);

            celda_configuracion.appendChild(boton_eliminar);

            

        }
    };
};

function confirmar_borrado() {
    let id = this.dataset.id_etiqueta;
    swal.fire({
        title: '¿ Está seguro de eliminar ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            borrar_etiquetas(id);
            etiquetas = listar_etiquetas();
            mostrar_datos();
            
        }
    })
};

input_filtro.addEventListener('keyup', mostrar_datos);

btn_agregar_etiquetas.addEventListener('click', function () {
    window.location.href = './registrar_etiquetas.html';
})


mostrar_datos();