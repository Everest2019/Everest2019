'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_Filtro');
const nombre = document.querySelector('#nombre_ce');
const a_regresar = document.querySelector('#a_regresar');

localStorage.setItem('centro_educativo','5c8dc9302bb1633a5054a51e');
let id_centro_educativo = localStorage.getItem('id_usuario');

//let centro_educativo = buscar_centro_educativo(id_centro_educativo);


//nombre.innerHTML = centro_educativo['nombre_comercial'];

let mostrar_datos = () =>{
    tabla.innerHTML = '';
    let filtro = input_Filtro.value;
    let actividades = listar_actividades ();
    let id_centro_educativo = localStorage.getItem('centro_educativo');/**Panel de control centro educativo ('id_usuario') */

    for (let i = 0; i < actividades.length; i++) {
        if (actividades[i]['id_centro_educativo'].includes(id_centro_educativo)){
            if (actividades[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = actividades[i]['titulo'];

            let fecha = new Date(actividades[i]['fecha']);
            fecha = fecha.toLocaleDateString();
            fila.insertCell().innerHTML = fecha;
            fila.insertCell().innerHTML = actividades[i]['descripcion'];

            let celdaEditar = fila.insertCell();
            let boton_editar = document.createElement('a');
            boton_editar.textContent= 'Editar';
            boton_editar.href= ``

            celdaEditar.appendChild(boton_editar);

        }
    };
};
};

mostrar_datos();


/*a_regresar.addEventListener('click', function(){
    if(localStorage.getItem('tipo_usuario') == 'administrador'){
        window.location.href = './panel_administrador_instituciones.html';
    }
    else{
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');
input_Filtro.addEventListener('keyup', mostrar_datos);*/
