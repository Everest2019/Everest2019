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
      
            celda_nombre.innerHTML = lista_articulo[i]['nombre'];
            celda_descripcion.innerHTML = lista_articulo[i]['descripcion'];

        }

    };
};

btn_agregar_articulos.addEventListener('click', function(){
    window.location.href = './registrar_articulos.html';
})

