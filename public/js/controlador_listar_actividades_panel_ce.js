'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_filtrar_noticia');
const nombre = document.querySelector('#nombre_ce');
const crear_actividad = document.querySelector('#btn_agregar_actividad');
const modificar_actividades = document.querySelector('#btn_modificar_actividad');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario != 'centro_educativo') {
    window.location.href = `iniciar_sesion.html`;
}

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let mostrar_datos = () => {
    tabla.innerHTML = '';
    let actividades = listar_actividades();
    let id_usuario = localStorage.getItem('id_usuario');
    let filtro = input_Filtro.value;
    for (let i = 0; i < actividades.length; i++) {
        if (actividades[i]['id_centro_educativo'].includes(id_usuario)) {
            if (actividades[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = actividades[i]['titulo'];

                let fecha = new Date(actividades[i]['fecha']);
                fecha = fecha.toLocaleDateString();
                fila.insertCell().innerHTML = fecha;
                fila.insertCell().innerHTML = actividades[i]['descripcion'];

              
        //se crea una nueva celda para el boton actividades
        let celda_configuracion = fila.insertCell();
        //se crea el boton editar
        let boton_editar = document.createElement('a');
        boton_editar.textContent = 'Editar';
        boton_editar.href =  `actualizar_actividades.html?id_actividades=${actividades[i]['_id']}`;

        celda_configuracion.appendChild(boton_editar);

        //se crea una nueva celda para el boton eliminar
        celda_configuracion = fila.insertCell();
                //se crea el boto eliminar
        let boton_eliminar = document.createElement('a');
        boton_eliminar.textContent = 'Eliminar';
        boton_eliminar.addEventListener('click', confirmar_borrado);

        celda_configuracion.appendChild(boton_eliminar);


            }
        };
    };


};

let actividad = () => {
    window.location.href = './agregar_actividades.html';
}


function confirmar_borrado() {
    let id = this.dataset.id_actividad;
    swal.fire({
        title: 'Está seguro que desea eliminar la la actiivdad?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            borrar_actividades(id_actividades);
            actividad = listar_actividades();
             mostrar_datos();
            Swal.fire(
                'Actividad eliminada!'
            )
        }
    })
};

function confirmar_borrado() {
    let id = this.dataset.id_actividades;
    swal.fire({
        title: 'Está seguro que desea eliminar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            borrar_actividades(id);
            actividad = listar_actividades();
            mostrar_datos();
            
        }
    })
};



mostrar_datos();
crear_actividad.addEventListener('click', actividad);
input_Filtro.addEventListener('keyup', mostrar_datos);