'use strict';

const banner = document.querySelector('#banner');
const logo = document.querySelector('#logo');
const nombre = document.querySelector('#nombre_ce');
const contenedor_caracteristicas = document.querySelector('#contenedor_caracteristicas');
const puntuacion_padres_familia = document.querySelector('#evaluacion_padres_familia');
const puntuacion_mep = document.querySelector('#evaluacion_mep');
const informacion_general = document.querySelector('#informacion_general');
const contenedor_imagenes = document.querySelector('#contenedor_imagenes');
const referencia_historica = document.querySelector('#referencia_historica');
const txt_religion =  document.querySelector('#txt_religion');
const txt_ensenanza =  document.querySelector('#txt_ensenanza');

/******************************************************** */

const web = document.querySelector('#pagina_web');
const correo = document.querySelector('#correo_electronico');
const telefono = document.querySelector('#telefono');
const fax = document.querySelector('#fax');
const contenedor_redes = document.querySelector('#iconos_redes');
const btn_cita = document.querySelector('#btn_cita');
const btn_informacion = document.querySelector('#btn_informacion');
/*-------------------------------------------------------*/


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario == 'centro_educativo') {
    window.location.href = `iniciar_sesion.html`;
}

/******************************************************** */
a_regresar.addEventListener('click', function () {
    if (localStorage.getItem('tipo_usuario') == 'administrador') {
        window.location.href = './panel_administrador_instituciones.html';
    }
    else {
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');

if (localStorage.getItem('tipo_usuario') == 'administrador') {
    btn_cita.classList.add('no_display');
    btn_informacion.classList.add('no_display');
}
/*------------------------------------------------------------*/


let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

let id_padre_familia = localStorage.getItem('id_usuario');
let padre_familia = buscar_padre_familia(id_padre_familia);
let nombre_usuario = padre_familia['primer_nombre'] + ' ' + padre_familia['primer_apellido'];
let favoritos_padre_familia = buscar_favoritos_padre_familia(id_padre_familia);


banner.src = centro_educativo['imagen_portada'];
logo.src = centro_educativo['logo'];
nombre.innerHTML = centro_educativo['nombre_comercial'];// se repite en ambos controladores

if(centro_educativo['evaluacion']){
    puntuacion_mep.innerHTML = centro_educativo['evaluacion'];
    puntuacion_mep.classList.add('evaluacion');

    let icono_estrella = document.createElement('i');
    icono_estrella.classList.add('fas','fa-star');

    puntuacion_mep.appendChild(icono_estrella);
}
else{
    puntuacion_mep.classList.add('sin_evaluar');
}

if(centro_educativo['evaluacion_padres']){
    puntuacion_padres_familia.innerHTML = centro_educativo['evaluacion'];

    let icono_estrella = document.createElement('i');
    icono_estrella.classList.add('fas','fa-star');

    puntuacion_padres_familia.appendChild(icono_estrella);
}
else{
    puntuacion_padres_familia.classList.add('sin_evaluar');
}

informacion_general.innerHTML = centro_educativo['informacion_general'];
referencia_historica.innerHTML = centro_educativo['referencia_historica'];

/********************************************************** */
web.innerHTML = centro_educativo['pagina_web'];
correo.innerHTML = centro_educativo['correo'];
telefono.innerHTML += centro_educativo['telefono'];
fax.innerHTML += centro_educativo['fax'];
/*-------------------------------------------------------------*/
/************************************************************ */

if (!centro_educativo['facebook'] == '') {

    let url_facebook = document.createElement('a');
    url_facebook.href = 'https://' + centro_educativo['facebook'];

    let icono_facebook = document.createElement('i');
    icono_facebook.classList.add('fab', 'fa-facebook-square', 'fa-4x', 'primer_icono');

    url_facebook.appendChild(icono_facebook);
    contenedor_redes.appendChild(url_facebook);
}

if (!centro_educativo['instagram'] == '') {

    let url_instagram = document.createElement('a');
    url_instagram.href = 'https://' + centro_educativo['instagram'];

    let icono_instagram = document.createElement('i');
    icono_instagram.classList.add('fab', 'fa-instagram', 'fa-4x');

    url_instagram.appendChild(icono_instagram);
    contenedor_redes.appendChild(url_instagram);
}

if (!centro_educativo['twitter'] == '') {

    let url_twitter = document.createElement('a');
    url_twitter.href = 'https://' + centro_educativo['twitter'];

    let icono_twitter = document.createElement('i');
    icono_twitter.classList.add('fab', 'fa-twitter', 'fa-4x');

    url_twitter.appendChild(icono_twitter);
    contenedor_redes.appendChild(url_twitter);
}

if (!centro_educativo['youtube'] == '') {

    let url_youtube = document.createElement('a');
    url_youtube.href = 'https://' + centro_educativo['youtube'];

    let icono_youtube = document.createElement('i');
    icono_youtube.classList.add('fab', 'fa-youtube', 'fa-4x');

    url_youtube.appendChild(icono_youtube);
    contenedor_redes.appendChild(url_youtube);
}

//Verificar si el centro educativo no tiene redes sociales agregadas
if (centro_educativo['facebook'] == '' && centro_educativo['instagram'] == '' && centro_educativo['twitter'] == '' && centro_educativo['youtube'] == '') {

    let redes_vacias = document.createElement('h1');
    redes_vacias.textContent = 'Este centro educativo no cuenta con redes sociales';

    contenedor_redes.appendChild(redes_vacias);
}

/*-----------------------------------------------------------*/
/********************************************************** */
let agendar_cita = () => {
    window.location.href = './registrar_citas.html';
};
btn_cita.addEventListener('click', agendar_cita)
/*----------------------------------------------------------*/

//Tipo Institucion
let contenedor_tipo_institucion = document.createElement('div');
contenedor_tipo_institucion.classList.add('contenedor_informacion');

let titulo_tipo_institucion = document.createElement('p');
titulo_tipo_institucion.classList.add('tipo_informacion');
titulo_tipo_institucion.textContent = 'Tipo Institución';

let tipo_institucion = document.createElement('p');
tipo_institucion.classList.add('informacion');
if (centro_educativo['tipo_institucion'] == 'Ambos') {
    tipo_institucion.textContent = 'Escuela y Colegio';
}
else {
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

if (centro_educativo['tipo_institucion'] == 'Colegio' || centro_educativo['tipo_institucion'] == 'Ambos') {

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

if (!centro_educativo['matricula'] == '') {

    let contenedor_matricula = document.createElement('div');
    contenedor_matricula.classList.add('contenedor_informacion');

    let titulo_matricula = document.createElement('p');
    titulo_matricula.classList.add('tipo_informacion');
    titulo_matricula.textContent = 'Matrícula';

    let matricula = document.createElement('p');
    matricula.classList.add('informacion');
    matricula.textContent += '₡ ' + centro_educativo['matricula'];

    contenedor_matricula.appendChild(titulo_matricula);
    contenedor_matricula.appendChild(matricula);

    contenedor_caracteristicas.appendChild(contenedor_matricula);
}

//Mensulidad

if (!centro_educativo['mensualidad'] == '') {

    let contenedor_mensualidad = document.createElement('div');
    contenedor_mensualidad.classList.add('contenedor_informacion');

    let titulo_mensualidad = document.createElement('p');
    titulo_mensualidad.classList.add('tipo_informacion');
    titulo_mensualidad.textContent = 'Mensualidad';

    let mensualidad = document.createElement('p');
    mensualidad.classList.add('informacion');
    mensualidad.textContent = '₡ ' + centro_educativo['mensualidad'];

    contenedor_mensualidad.appendChild(titulo_mensualidad);
    contenedor_mensualidad.appendChild(mensualidad);

    contenedor_caracteristicas.appendChild(contenedor_mensualidad);
}

//Etiquetas
let etiquetas = [];
if(centro_educativo['etiquetas'][0] != undefined){
    etiquetas = centro_educativo['etiquetas'];
    let contenedor_etiquetas = document.createElement('div');
    contenedor_etiquetas.classList.add('contenedor_informacion', 'contenedor_etiquetas');
    
    let titulo_etiquetas = document.createElement('p');
    titulo_etiquetas.classList.add('tipo_informacion');
    
    titulo_etiquetas.textContent = 'Etiquetas';
    
    contenedor_etiquetas.appendChild(titulo_etiquetas);
    
    for(let i=0; i<etiquetas.length; i++){
        var div_etiqueta = document.createElement('div');
        let etiqueta = document.createElement('p');
        div_etiqueta.classList.add('etiqueta');
        etiqueta.classList.add('texto_etiqueta');
        etiqueta.textContent = etiquetas[i]['accion'];
    
        div_etiqueta.appendChild(etiqueta);
        contenedor_etiquetas.appendChild(div_etiqueta);
    }
    
    
    contenedor_caracteristicas.appendChild(contenedor_etiquetas);
}


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


//Idiomas
let contenedor_idioma = document.createElement('div');
contenedor_idioma.classList.add('contenedor_informacion');

let titulo_idioma = document.createElement('p');
titulo_idioma.classList.add('tipo_informacion');
titulo_idioma.textContent = 'Idiomas';

contenedor_idioma.appendChild(titulo_idioma);

let total_idiomas = 0;

for(let i = 0; i < centro_educativo['idiomas'].length; i++){
    let idioma = document.createElement('p');
    idioma.classList.add('informacion');
    idioma.textContent = centro_educativo['idiomas'][i]['idioma'];

    contenedor_idioma.appendChild(idioma);

    total_idiomas++;
}
if(total_idiomas > 0){
    contenedor_caracteristicas.appendChild(contenedor_idioma);
}


//Boton agregar a favoritos
let contenedor_favoritos = document.createElement('div');
contenedor_favoritos.classList.add('contenedor_informacion');

let icono = document.createElement('i');
icono.classList.add('fas', 'fa-star');

let boton_favoritos = document.createElement('button');
boton_favoritos.type = 'button';
boton_favoritos.classList.add('boton_favoritos');
boton_favoritos.textContent = 'Agregar a favoritos';
boton_favoritos.id = 'btn_agregar_favorito';

boton_favoritos.appendChild(icono);
contenedor_favoritos.appendChild(boton_favoritos);




//Eliminar de favoritos
let contenedor_eliminar_favoritos = document.createElement('div');
contenedor_eliminar_favoritos.classList.add('contenedor_informacion');

let icono_eliminar = document.createElement('i');
icono_eliminar.classList.add('fas', 'fa-times');

let boton_eliminar_favoritos = document.createElement('button');
boton_eliminar_favoritos.type = 'button';
boton_eliminar_favoritos.classList.add('boton_eliminar_favoritos');
boton_eliminar_favoritos.textContent = 'Eliminar de favoritos';
boton_eliminar_favoritos.id = 'btn_eliminar_favorito';

boton_eliminar_favoritos.appendChild(icono_eliminar);
contenedor_eliminar_favoritos.appendChild(boton_eliminar_favoritos);



//Condicional para saber que boton mostrar
let favorito = false;
for (let i = 0; i < favoritos_padre_familia.length; i++) {

    if (favoritos_padre_familia[i]['id_centro_educativo'] == id_centro_educativo) {
        favorito = true;
        console.log('Encontrado');
    }
}

let usuario = localStorage.getItem('tipo_usuario')

if (favorito && usuario == 'padre_familia') {
    contenedor_caracteristicas.appendChild(contenedor_eliminar_favoritos);
}
else if(!favorito && usuario == 'padre_familia'){
    contenedor_caracteristicas.appendChild(contenedor_favoritos);
}

//Galeria

let contenedor_imagen1 = document.createElement('div');
let contenedor_imagen2 = document.createElement('div');
let contenedor_imagen3 = document.createElement('div');
let contenedor_imagen4 = document.createElement('div');

contenedor_imagen1.classList.add('contenedor_imagen');
contenedor_imagen2.classList.add('contenedor_imagen');
contenedor_imagen3.classList.add('contenedor_imagen');
contenedor_imagen4.classList.add('contenedor_imagen');

if (centro_educativo['galeria1'] != '') {
    let imagen1 = document.createElement('img');
    imagen1.src = centro_educativo['galeria1'];
    contenedor_imagen1.appendChild(imagen1);
}

if (centro_educativo['galeria2'] != '') {
    let imagen2 = document.createElement('img');
    imagen2.src = centro_educativo['galeria2'];
    contenedor_imagen2.appendChild(imagen2);
}

if (centro_educativo['galeria3'] != '') {
    let imagen3 = document.createElement('img');
    imagen3.src = centro_educativo['galeria3'];
    contenedor_imagen3.appendChild(imagen3);
}

if (centro_educativo['galeria4'] != '') {
    let imagen4 = document.createElement('img');
    imagen4.src = centro_educativo['galeria4'];
    contenedor_imagen4.appendChild(imagen4);
}

contenedor_imagenes.appendChild(contenedor_imagen1);
contenedor_imagenes.appendChild(contenedor_imagen2);
contenedor_imagenes.appendChild(contenedor_imagen3);
contenedor_imagenes.appendChild(contenedor_imagen4);

//Informacion adicional

    if(centro_educativo['informacion_ensenanza']){
        txt_ensenanza.innerHTML = centro_educativo['informacion_ensenanza'];
    }
    else{
        txt_ensenanza.innerHTML = 'No hay información sobre el método de enseñanza';
    }

    if(centro_educativo['informacion_religion']){
        txt_religion.innerHTML = centro_educativo['informacion_religion'];
    }
    else{
        txt_religion.innerHTML = 'No hay información sobre la religión';
    }




a_regresar.addEventListener('click', function () {
    if (localStorage.getItem('tipo_usuario') == 'administrador') {
        window.location.href = './panel_administrador_instituciones.html';
    }
    else {
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');


let agregar_favorito = () => {
    let id_centro_educativo = localStorage.getItem('centro_educativo');
    let id_usuario = localStorage.getItem('id_usuario');
    console.log(id_centro_educativo);
    agregar_centro_educativo_favorito(id_centro_educativo, id_usuario, centro_educativo['nombre_comercial'],nombre_usuario);
};

let eliminar_favorito = () => {
    swal.fire({
        type: 'warning',
        title: 'Remover Favorito',
        text: `¿Desea remover a ${centro_educativo['nombre_comercial']} de su lista de favoritos?`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Sí, deseo eliminarlo',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            eliminar_centro_educativo_favorito(id_padre_familia, id_centro_educativo, centro_educativo['nombre_comercial'], nombre_usuario);
        }
    })
};

boton_favoritos.addEventListener('click', agregar_favorito);
boton_eliminar_favoritos.addEventListener('click', eliminar_favorito);

let obtener_datos = () => {

    let centro_educativo = id_centro_educativo;

    swal.fire({
        title: '¿Seguro que desea registrar la solicitud?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            registrar_solicitud(centro_educativo, id_padre_familia, nombre_usuario);
        }
    })
}


btn_informacion.addEventListener('click', obtener_datos);
