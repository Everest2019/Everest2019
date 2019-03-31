'use strict';
const banner = document.querySelector('#banner');
const logo = document.querySelector('#logo');
const nombre = document.querySelector('#nombre_ce');
const contenedor_caracteristicas = document.querySelector('#contenedor_caracteristicas');
const informacion_general = document.querySelector('#informacion_general');
const contenedor_imagenes = document.querySelector('#contenedor_imagenes');
const referencia_historica = document.querySelector('#referencia_historica');


let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);



banner.src = centro_educativo['imagen_portada'];
logo.src = centro_educativo['logo'];
nombre.innerHTML = centro_educativo['nombre_comercial'];
informacion_general.innerHTML = centro_educativo['informacion_general'];
referencia_historica.innerHTML = centro_educativo['referencia_historica'];

//Tipo Institucion
let contenedor_tipo_institucion = document.createElement('div');
contenedor_tipo_institucion.classList.add('contenedor_informacion');

let titulo_tipo_institucion = document.createElement('p');
titulo_tipo_institucion.classList.add('tipo_informacion');
titulo_tipo_institucion.textContent = 'Tipo Institución';

let tipo_institucion = document.createElement('p');
tipo_institucion.classList.add('informacion');
    if(centro_educativo['tipo_institucion'] == 'Ambos'){
        tipo_institucion.textContent = 'Escuela y Colegio';
    }
    else{
        tipo_institucion.textContent = centro_educativo['tipo_institucion'];
    }

contenedor_tipo_institucion.appendChild(titulo_tipo_institucion);
contenedor_tipo_institucion.appendChild(tipo_institucion);

contenedor_caracteristicas.appendChild(contenedor_tipo_institucion);

//Tipo de Sistema

let contenedor_tipo_sistema = document.createElement('div');
contenedor_tipo_sistema.classList.add('contenedor_informacion');

let titulo_tipo_sistema = document.createElement('p');
titulo_tipo_sistema.classList.add('tipo_informacion');
titulo_tipo_sistema.textContent = 'Modalidad';

let tipo_sistema = document.createElement('p');
tipo_sistema.classList.add('informacion');
tipo_sistema.textContent = centro_educativo['modalidad'];

contenedor_tipo_sistema.appendChild(titulo_tipo_sistema);
contenedor_tipo_sistema.appendChild(tipo_sistema);

contenedor_caracteristicas.appendChild(contenedor_tipo_sistema);

//Tipo de colegio

if(centro_educativo['tipo_institucion'] == 'Colegio' || centro_educativo['tipo_institucion'] == 'Ambos'){

    let contenedor_tipo_colegio = document.createElement('div');
    contenedor_tipo_colegio.classList.add('contenedor_informacion');

    let titulo_tipo_colegio = document.createElement('p');
    titulo_tipo_colegio.classList.add('tipo_informacion');
    titulo_tipo_colegio.textContent = 'Tipo Colegio';

    let tipo_colegio = document.createElement('p');
    tipo_colegio.classList.add('informacion');
    tipo_colegio.textContent = centro_educativo['tipo_colegio'];

    contenedor_tipo_colegio.appendChild(titulo_tipo_colegio);
    contenedor_tipo_colegio.appendChild(tipo_colegio);

    contenedor_caracteristicas.appendChild(contenedor_tipo_colegio);
}

//Matricula

if(!centro_educativo['matricula'] == ''){

    let contenedor_matricula = document.createElement('div');
    contenedor_matricula.classList.add('contenedor_informacion');

    let titulo_matricula = document.createElement('p');
    titulo_matricula.classList.add('tipo_informacion');
    titulo_matricula.textContent = 'Matrícula';

    let matricula = document.createElement('p');
    matricula.classList.add('informacion');
    matricula.textContent += '₡ '+ centro_educativo['matricula'];

    contenedor_matricula.appendChild(titulo_matricula);
    contenedor_matricula.appendChild(matricula);

    contenedor_caracteristicas.appendChild(contenedor_matricula);
}

//Mensulidad

if(!centro_educativo['mensualidad'] == ''){

    let contenedor_mensualidad = document.createElement('div');
    contenedor_mensualidad.classList.add('contenedor_informacion');

    let titulo_mensualidad = document.createElement('p');
    titulo_mensualidad.classList.add('tipo_informacion');
    titulo_mensualidad.textContent = 'Mensualidad';

    let mensualidad = document.createElement('p');
    mensualidad.classList.add('informacion');
    mensualidad.textContent = '₡ '+ centro_educativo['mensualidad'];

    contenedor_mensualidad.appendChild(titulo_mensualidad);
    contenedor_mensualidad.appendChild(mensualidad);

    contenedor_caracteristicas.appendChild(contenedor_mensualidad);
}

//Etiquetas

let contenedor_etiquetas = document.createElement('div');
contenedor_etiquetas.classList.add('contenedor_informacion', 'contenedor_etiquetas');

let titulo_etiquetas = document.createElement('p');
titulo_etiquetas.classList.add('tipo_informacion');
titulo_etiquetas.textContent = 'Etiquetas';

contenedor_etiquetas.appendChild(titulo_etiquetas);

for(let i=1; i <= 4; i++){
    var div_etiqueta = document.createElement('div');
    let etiqueta = document.createElement('p');
    div_etiqueta.classList.add('etiqueta');
    etiqueta.classList.add('texto_etiqueta');
    etiqueta.textContent = 'Deporte';

    div_etiqueta.appendChild(etiqueta);
    contenedor_etiquetas.appendChild(div_etiqueta); 
}


contenedor_caracteristicas.appendChild(contenedor_etiquetas);

//Año de fundacion

let contenedor_fundacion = document.createElement('div');
contenedor_fundacion.classList.add('contenedor_informacion');

let titulo_fundacion = document.createElement('p');
titulo_fundacion.classList.add('tipo_informacion');
titulo_fundacion.textContent = 'Año de fundación';

let fundacion = document.createElement('p');
fundacion.classList.add('informacion');
fundacion.textContent = centro_educativo['ano_creacion'];

contenedor_fundacion.appendChild(titulo_fundacion);
contenedor_fundacion.appendChild(fundacion);

contenedor_caracteristicas.appendChild(contenedor_fundacion);

//Galeria

let contenedor_imagen1 = document.createElement('div');
let contenedor_imagen2 = document.createElement('div');
let contenedor_imagen3 = document.createElement('div');
let contenedor_imagen4 = document.createElement('div');

contenedor_imagen1.classList.add('contenedor_imagen');
contenedor_imagen2.classList.add('contenedor_imagen');
contenedor_imagen3.classList.add('contenedor_imagen');
contenedor_imagen4.classList.add('contenedor_imagen');

let imagen1 = document.createElement('img');
imagen1.src = centro_educativo['galeria1'];

let imagen2 = document.createElement('img');
imagen2.src = centro_educativo['galeria2'];

let imagen3 = document.createElement('img');
imagen3.src = centro_educativo['galeria3'];

let imagen4 = document.createElement('img');
imagen4.src = centro_educativo['galeria4'];

contenedor_imagen1.appendChild(imagen1);
contenedor_imagen2.appendChild(imagen2);
contenedor_imagen3.appendChild(imagen3);
contenedor_imagen4.appendChild(imagen4);

contenedor_imagenes.appendChild(contenedor_imagen1);
contenedor_imagenes.appendChild(contenedor_imagen2);
contenedor_imagenes.appendChild(contenedor_imagen3);
contenedor_imagenes.appendChild(contenedor_imagen4);







