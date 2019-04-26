'use strict';

const logo = document.querySelector('#logo');
const nombre = document.querySelector('#nombre');
const informacion_general = document.querySelector('#informacion_general');
const referencia_historica = document.querySelector('#referencia_historica');
const tipo_institución = document.querySelector('#tipo_institución');
const tipo_colegio = document.querySelector('#tipo_colegio');
const modalidad = document.querySelector('#modalidad');
const ubicacion = document.querySelector('#ubicacion');
const cedula = document.querySelector('#cedula');
const correo = document.querySelector('#correo');
const documentos = document.querySelector('#documentos');
const celda_configuracion = document.querySelector('#celda_configuracion');
const celda_eliminar = document.querySelector('#celda_eliminar');


//Información del encargado del centro educativo

const nombre_encargado = document.querySelector('#nombre_encargado');
const correo_encargado = document.querySelector('#correo_encargado');
const telefono_encargado = document.querySelector('#telefono_encargado');
const identificacion_encargado = document.querySelector('#identificacion_encargado');
const foto = document.querySelector('#foto');

/*------------------------------------------------------------*/
let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id_centro_educativo = url.searchParams.get(param); //Toma el parámetro id del url y retorna el valor
    return id_centro_educativo;
}
let _id = get_param('id_centro_educativo');

let centro_educativo = buscar_centro_educativo(_id);
let id_centro_educativo = centro_educativo['_id'];
/*------------------------------------------------------------*/

nombre.innerHTML = centro_educativo['nombre_comercial'];
informacion_general.innerHTML = centro_educativo['informacion_general'];
tipo_institución.innerHTML = centro_educativo['tipo_institucion'];
tipo_colegio.innerHTML = centro_educativo['tipo_colegio'];
modalidad.innerHTML = centro_educativo['modalidad'];
ubicacion.innerHTML = centro_educativo['provincia'] + ", " + centro_educativo['canton'];
referencia_historica.innerHTML = centro_educativo['referencia_historica'];
cedula.innerHTML = centro_educativo['cedula_juridica'];
correo.innerHTML = centro_educativo['correo'];


let imagen1 = document.createElement('img');
imagen1.src = './img/document.png';
let imagen2 = document.createElement('img');
imagen2.src = './img/document.png';
let imagen3 = document.createElement('img');
imagen3.src = './img/document.png';
if (centro_educativo['documento1']) {
    let documento1 = document.createElement('a');
    documento1.classList.add('documento');
    documento1.href = centro_educativo['documento1'];
    documento1.appendChild(imagen1);
    documentos.appendChild(documento1);

}
if (centro_educativo['documento2']) {
    let documento2 = document.createElement('a');
    documento2.classList.add('documento');
    documento2.href = centro_educativo['documento2'];
    documento2.appendChild(imagen2);
    documentos.appendChild(documento2);
}
if (centro_educativo['documento3']) {
    let documento3 = document.createElement('a');
    documento3.classList.add('documento');
    documento3.href = centro_educativo['documento3'];
    documento3.appendChild(imagen3);
    documentos.appendChild(documento3);

}

if (centro_educativo['logo']) {
    logo.src = centro_educativo['logo'];
} else {
    logo.src = 'img/user_icon.png';
}

//Encargado centro educativo
nombre_encargado.innerHTML = centro_educativo['primer_nombre_encargado'] + " " + centro_educativo['primer_apellido_encargado'] + " " + centro_educativo['segundo_apellido_encargado'];
correo_encargado.innerHTML = centro_educativo['correo_encargado'];
telefono_encargado.innerHTML = centro_educativo['telefono_encargado'];
identificacion_encargado.innerHTML = centro_educativo['identificacion_encargado'];
if (centro_educativo['fotografia_encargado']) {
    foto.src = centro_educativo['fotografia_encargado'];
} else {
    foto.src = 'img/user_icon.png';
}
//Boton de aprobar
if (centro_educativo['aprobado'] == false) {
    let boton_aprobar = document.createElement('button');
    boton_aprobar.type = 'button';
    boton_aprobar.classList.add('boton_aprobar');
    boton_aprobar.dataset.id_centro_educativo = centro_educativo['_id'];
    boton_aprobar.addEventListener('click', habilitar);
    boton_aprobar.textContent = 'Aprobar';
    boton_aprobar.id_centro_educativo = 'boton_aprobar';
    celda_configuracion.appendChild(boton_aprobar);
}


function habilitar() {
    let id_centro_educativo = this.dataset.id_centro_educativo;

    aprobar_centro_aducativo(id_centro_educativo,centro_educativo['codigo_verificacion'],centro_educativo['correo_encargado'],);
    Swal.fire({
        title:'¡Centro Educativo aprobado!',
        text:'El centro educativo fue eliminado con éxito',
        type:'success',
        onClose: () =>{
            window.location.href = 'panel_administrador_aprobaciones.html';
        }
    }
       
    )
};

let eliminar_centro_educativo = () => {
    if (centro_educativo['aprobado'] == false) {
        swal.fire({
            type: 'warning',
            title: '¿Seguro que desea eliminar el centro educativo?',
            text: `Este centro educativo será borrado completamente`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sí, deseo eliminarlo',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar'

        }).then((result) => {
            if (result.value) {
                borrar_centro_educativo(id_centro_educativo);
                Swal.fire({
                    title:'¡Centro Educativo eliminado!',
                    text:'El centro educativo fue eliminado con éxito',
                    type:'success',
                    onClose: ()=>{
                        window.location.href = 'panel_administrador_aprobaciones.html';
                    }
                }
                    
                )
            }
        })
    }
};

if (aprobar_centro_aducativo['aprobado'] == true) {

}
celda_eliminar.addEventListener('click', eliminar_centro_educativo);

