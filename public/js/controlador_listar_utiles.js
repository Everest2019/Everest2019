'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');
const input_filtro = document.querySelector('#txt_filtar');

let lista_utiles = listar_utiles();

let tipoUsuario = localStorage.getItem("tipo_usuario");

let mostrar_datos =()=> {


    if (tipoUsuario == "padre_familia") {
        document.getElementById("registrar_lista_utiles").style.display = "none";
    }
    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < lista_utiles.length; i++) {
        if (lista_utiles[i]['articulo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = lista_utiles[i]['articulo'];
            fila.insertCell().innerHTML = lista_utiles[i]['cantidad'];
            fila.insertCell().innerHTML = lista_utiles[i]['descripcion'];

            //se crea el boton de editar
            let celda_configuracion = fila.insertCell();

            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizaar_lista_utiles.html?id_lista_utiles=${lista_utiles[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);

            // se crea el boton para eliminar
            celda_configuracion = fila.insertCell();

            let boton_eliminar = document.createElement('a');
            boton_eliminar.textContent = 'Eliminar';
            boton_eliminar.href = "#";
            boton_eliminar.dataset.id_lista_utiles = lista_utiles[i]['_id'];
            boton_eliminar.addEventListener('click', confirmar_borrado);

            celda_configuracion.appendChild(boton_eliminar);



        }

    };
};


function confirmar_borrado() {
    let id = this.dataset.id_lista_utiles;
    swal.fire({
        title: 'Está seguro que desea eliminar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            borrar_lista_utiles(id);
            
    lista_utiles = listar_utiles();
            mostrar_datos();

        }
    })

};

input_filtro.addEventListener('keyup', mostrar_datos);

mostrar_datos();