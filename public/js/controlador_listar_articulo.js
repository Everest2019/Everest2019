'use strict';

const input_filtrar = document.querySelector('#txt_buscar');
const btn_agregar_articulos = document.querySelector('#btn_agregar');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario !='administrador') {
    window.location.href = `iniciar_sesion.html`;
}

let lista_articulo = listar();

mostrar_datos();
input_filtrar.addEventListener('keyup', mostrar_datos);


function mostrar_datos() {


    const tabla = document.querySelector('#tbl_articulo tbody');
    let filtro = input_filtrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < lista_articulo.length; i++) {
        if (lista_articulo[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            let celda_nombre = fila.insertCell();
            let celda_descripcion = fila.insertCell();
            let celda_accion = fila.insertCell();
            celda_accion.classList.add('td_accion');

            celda_nombre.innerHTML = lista_articulo[i]['nombre'];
            celda_descripcion.innerHTML = lista_articulo[i]['descripcion'];

            let btn_modificar = document.createElement('a');
            btn_modificar.href = `./modificar_articulo.html?id_articulo=${lista_articulo[i]['_id']}`;
    
            let icono_modificar = document.createElement('i');
            icono_modificar.classList.add('far', 'fa-edit');

            let btn_eliminar = document.createElement('a');
            btn_eliminar.dataset.id_articulo = lista_articulo[i]['_id'];
            btn_eliminar.href = '#';
            btn_eliminar.addEventListener('click', borrar_articulo);

            let icono_eliminar = document.createElement('i');
            icono_eliminar.classList.add('far', 'fa-trash-alt');
    
            btn_modificar.appendChild(icono_modificar);
            btn_eliminar.appendChild(icono_eliminar);

            celda_accion.appendChild(btn_modificar);
            celda_accion.appendChild(btn_eliminar);

        }

    };
};

btn_agregar_articulos.addEventListener('click', function(){
    window.location.href = './registrar_articulos.html';
})

function borrar_articulo(){
    let id_articulo =  this.dataset.id_articulo;
    swal.fire({
        title: '¿Seguro que desea eliminar este artículo?',
        text: "Este artículo será borrado completamente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar',

      }).then((result) => {
        if (result.value) {
            eliminar_articulo(id_articulo);

            lista_articulo = listar();
            mostrar_datos();
        }
    });
};