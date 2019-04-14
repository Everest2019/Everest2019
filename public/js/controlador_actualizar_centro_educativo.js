'use strict';

// Elementos primer contenedor
const input_nombre_institucion = document.querySelector('#txt_nombre');
const input_correo_institucion = document.querySelector('#txt_correo');

// Elementos segundo contenedor
const input_cedula_institucion = document.querySelector('#txt_cedula');
const select_tipo_colegio = document.querySelector('#txt_tipo_colegio');
const contenedor_tipo_institucion = document.querySelector('#cont_tipo_institucion');
const contenedor_sistema = document.querySelector('#cont_tipo_sistema');
const radios_tipo_institucion = document.querySelectorAll('#cont_tipo_institucion input[type=radio]');

// Elementos tercer contenedor
const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito');
const input_direccion_exacta = document.querySelector('#txt_direccion_exacta'); 

//Elementos cuarto contenedor
const input_latitud = document.querySelector('#txt_latitud');
const input_longitud = document.querySelector('#txt_longitud');

// Elementos quinto contenedor
//const input_infoadicional_idioma = document.querySelector('#descripcion_idioma'); 
const input_infoadicional_religion = document.querySelector('#descripcion_religion'); 
const input_infoadicional_ensenanza = document.querySelector('#descripcion_ensenanza'); 

// Elementos sexto contenedor
const input_descripcion_institucion = document.querySelector('#descripcion_institucion');
const input_referencia_historica = document.querySelector('#referencia_historica');
const input_ano_fundacion = document.querySelector('#anio_fundacion');
const input_matricula = document.querySelector('#txt_matricula');
const input_mensualidad = document.querySelector('#txt_mensualidad');

//Elemento octavo contenedor
const url_logo_institucion = document.querySelector('#url_logo_institucion');
const img_logo_institucion = document.querySelector('#img_logo_institucion');

// Elementos noveno contenedor
const url_img_portada = document.querySelector('#img_portada');
const img_portada_institucion = document.querySelector('#preview_portada');

// Elementos decimo contenedor
const url_galeria1 = document.querySelector('#url_galeria1');
const img_galeria1 = document.querySelector('#img_galeria1');

const url_galeria2 = document.querySelector('#url_galeria2');
const img_galeria2 = document.querySelector('#img_galeria2');

const url_galeria3 = document.querySelector('#url_galeria3');
const img_galeria3 = document.querySelector('#img_galeria3');

const url_galeria4 = document.querySelector('#url_galeria4');
const img_galeria4 = document.querySelector('#img_galeria4');

//Elementos decimo contenedor
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_web = document.querySelector('#txt_web');
const input_facebook = document.querySelector('#txt_facebook');
const input_instagram = document.querySelector('#txt_instagram');
const input_twitter = document.querySelector('#txt_twitter');
const input_youtube = document.querySelector('#txt_youtube');

//Elementos onceavo contenedor
const url_archivo_documento1 = document.querySelector('#url_documento1');
const url_archivo_documento2 = document.querySelector('#url_documento2');
const url_archivo_documento3 = document.querySelector('#url_documento3');

//Elementos doceavo contenedor
const input_primer_nombre = document.querySelector('#txt_primer_nombre_encargado');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre_encargado');
const input_primer_apellido = document.querySelector('#txt_primer_apellido_encargado');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido_encargado');
const input_correo_encargado = document.querySelector('#txt_correo_encargado');
const input_departamento = document.querySelector('#txt_departamento_encargado');
const input_telefono_encargado = document.querySelector('#txt_telefono_encargado');
const input_extension = document.querySelector('#txt_extension_encargado');
const input_identificacion = document.querySelector('#txt_identificacion_encargado');

//Elementos treceavo contenedor
const url_img_encargado = document.querySelector('#url_foto_encargado');
const img_encargado = document.querySelector('#img_encargado');

//Contraseña

const contrasena = document.querySelector('#txt_contrasena');
const verificar_contrasena = document.querySelector('#txt_verificar_contrasena');


//Boton de enviar
const btn_enviar = document.querySelector('#btn_registrar_institucion');

//Botones slides
const flecha_primer_slide = document.querySelector('#flecha_primer_slide');
const flecha_segundo_slide = document.querySelector('#flecha_segundo_slide');
const flecha_tercer_slide = document.querySelector('#flecha_tercer_slide');
const flecha_cuarto_slide = document.querySelector('#flecha_cuarto_slide');
const flecha_quinto_slide = document.querySelector('#flecha_quinto_slide');
const flecha_sexto_slide = document.querySelector('#flecha_sexto_slide');
const flecha_setimo_slide = document.querySelector('#flecha_setimo_slide');
const flecha_octavo_slide = document.querySelector('#flecha_octavo_slide');
const flecha_noveno_slide = document.querySelector('#flecha_noveno_slide');
const flecha_decimo_slide = document.querySelector('#flecha_decimo_slide');
const flecha_onceavo_slide = document.querySelector('#flecha_onceavo_slide');
const flecha_doceavo_slide = document.querySelector('#flecha_doceavo_slide');
const flecha_treceavo_slide = document.querySelector('#flecha_treceavo_slide');
const flecha_catorceavo_slide = document.querySelector('#flecha_catorceavo_slide');
const flecha_quiceavo_slide = document.querySelector('#flecha_quiceavo_slide');

let get_param = (param) =>{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id_centro_educativo = url.searchParams.get(param); //Toma el parámetro id del url y retorna el valor
    return id_centro_educativo;
}

let _id = get_param('id_centro_educativo');

let centro_educativo = buscar_centro (_id);

if(centro_educativo){
    input_nombre_institucion.value = centro_educativo[0]['nombre_comercial'];
    input_correo_institucion.value = centro_educativo[0]['correo'];
    input_cedula_institucion.value = centro_educativo[0]['cedula_juridica'];
    input_modalidad.value = centro_educativo[0]['modalidad'];
    input_colegio.value = centro_educativo[0]['tipo_colegio'];
    input_sistema.value = centro_educativo[0]['pregunta'];
    input_logo.value = centro_educativo[0]['imagen_portada'];
    //input_galeria.value = centro_educativo[0]['pregunta'];
    //input_galeria.value = centro_educativo[0]['pregunta'];
    input_primer_nombre_encargado.value = centro_educativo[0]['primer_nombre_encargado'];
    input_segundo_nombre_encargado.value = centro_educativo[0]['segundo_nombre_encargado'];
    input_primer_apellido_encargado.value = centro_educativo[0]['primer_apellido_encargado'];
    input_segundo_apellido_encargado.value = centro_educativo[0]['segundo_apellido_encargado'];
    input_correo_encargado.value = centro_educativo[0]['correo_encargado'];
    input_departamento_encargado.value = centro_educativo[0]['departamento_encargado'];
    input_telefono_encargado.value = centro_educativo[0]['telefono_encargado'];
    input_extension_encargado.value = centro_educativo[0]['extension_encargado'];
    input_identificacion_encargado.value = centro_educativo[0]['identificacion_encargado'];
    input_fotografia_encargado.value = centro_educativo[0]['fotografia_encargado'];

    input_contrasena.value = centro_educativo[0]['contrasena'];

}

let obtener_datos = () =>{
    let nombre_institucion = input_nombre_institucion;
    let correo_institucion = input_correo_institucion;
    let cedula_institucion = input_cedula_juridica;
    let tipo_institucion = input_modalidad;
    let tipo_colegio = input_colegio;
    let tipo_sistema = input_sistema;
    let logo = input_logo;

    let primer_nombre_encargado = input_primer_nombre_encargado;
    let segundo_nombre_encargado = input_segundo_nombre_encargado;
    let primer_apellido_encargado = input_primer_apellido_encargado;
    let segundo_apellido_encargado = input_segundo_apellido_encargado;
    let correo_encargado = input_correo_encargado;
    let departamento_encargado = input_departamento_encargado;
    let telefono_encargado = input_telefono_encargado;
    let extension_encargado = input_extension_encargado;
    let identificacion_encargado = input_identificacion_encargado;
    let fotografia_encargado = input_fotografia_encargado;

    let contrasena = input_contrasena;

    Swal.fire({
        title: 'Está seguro que desea actualizar el centro educativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_centro_educativo(nombre_institucion, correo_institucion, cedula_institucion, tipo_institucion, tipo_sistema, tipo_colegio, provincia, canton, distrito, direccion_exacta, latitud, longitud, idioma, religion, ensenanza, descripcion_institucion, referencia_historica, ano_fundacion, matricula, mensualidad, portada, galeria1, galeria2, galeria3, galeria4, telefono, fax, web, facebook, instagram, twitter, youtube, logo, documento1, documento2, documento3, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_encargado, departamento, telefono_encargado, extension, identificacion, fotografia_encargado, aprobado, estado, tipo_usuario, contrasena, _id);
        }
      })   
};

btn_modificar_institucion.addEventListener('click', obtener_datos);