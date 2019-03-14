'use strict';

// Elementos primer contenedor
const input_nombre_institucion = document.querySelector('#txt_nombre');
const input_correo_institucion = document.querySelector('#txt_correo');

// Elementos segundo contenedor
const input_cedula_institucion = document.querySelector('#txt_cedula');
const select_tipo_colegio = document.querySelector('#txt_tipo_colegio');
const contenedor_tipo_institucion = document.querySelector('#cont_tipo_institucion');
const contenedor_sistema = document.querySelector('#cont_tipo_sistema');

// Elementos tercer contenedor
const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito');
const input_direccion_exacta = document.querySelector('#txt_direccion_exacta'); 

// Elementos quinto contenedor
const input_infoadicional_idioma = document.querySelector('#descripcion_idioma'); 
const input_infoadicional_religion = document.querySelector('#descripcion_religion'); 
const input_infoadicional_ensenanza = document.querySelector('#descripcion_ensenanza'); 

// Elementos sexto contenedor
const input_descripcion_institucion = document.querySelector('#descripcion_institucion');
const input_referencia_historica = document.querySelector('#referencia_historica');
const input_ano_fundacion = document.querySelector('#anio_fundacion');
const input_matricula = document.querySelector('#txt_matricula');
const input_mensualidad = document.querySelector('#txt_mensualidad');

// Elementos octavo contenedor
//QUEDAN PENDIENTES LAS IMAGENES CLOUDINARY

// Elementos noveno contenedor
//QUEDAN PENDIENTES LAS IMAGENES CLOUDINARY

//Elementos decimo contenedor
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_web = document.querySelector('#txt_web');
const input_facebook = document.querySelector('#txt_facebook');
const input_instagram = document.querySelector('#txt_instagram');
const input_twitter = document.querySelector('#txt_twitter');
const input_youtube = document.querySelector('#txt_youtube');

//Elementos onceavo contenedor
//QUEDAN PENDIENTES LOS DOCUMENTOS CLOUDINARY

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

//Boton de enviar
const btn_enviar = document.querySelector('#btn_registrar_institucion');


let validar_datos = () => {

    let error = false;
    let radio_institucion = document.querySelector('#cont_tipo_institucion input[type=radio]:checked');
    let radio_sistema = document.querySelector('#cont_tipo_sistema input[type=radio]:checked');

    //Elementos setimo contenedor
    let checkbox_transporte = document.querySelector('#check_transporte');
    let checkbox_comedor = document.querySelector('#check_comedor');
    let checkbox_soda = document.querySelector('#check_soda');
    let checkbox_iglesia = document.querySelector('#check_iglesia');
    let checkbox_bachillerato = document.querySelector('#check_bachillerato_internacional');
    let checkbox_gimnasio = document.querySelector('#check_gimnasio');
    let checkbox_verde = document.querySelector('#check_zona_verde');
    let checkbox_guarderia = document.querySelector('#check_guarderia');

    if(input_nombre_institucion.value == ''){
        error = true;
        input_nombre_institucion.classList.add('input_error')
    }
    else{
        input_nombre_institucion.classList.remove('input_error');
    }

    if(input_correo_institucion.value == ''){
        error = true;
        input_correo_institucion.classList.add('input_error')
    }
    else{
        input_correo_institucion.classList.remove('input_error');
    }

    if(input_cedula_institucion.value == ''){
        error = true;
        input_cedula_institucion.classList.add('input_error')
    }
    else{
        input_cedula_institucion.classList.remove('input_error');
    }

    if(radio_institucion == null){
        error = true;
        contenedor_tipo_institucion.classList.add('input_error')
    }
    else{
        contenedor_tipo_institucion.classList.remove('input_error');
    }

    if(select_tipo_colegio.value == ''){
        error = true;
        select_tipo_colegio.classList.add('input_error')
    }
    else{
        select_tipo_colegio.classList.remove('input_error');
    }

    if(radio_sistema == null){
        error = true;
        contenedor_sistema.classList.add('input_error')
    }
    else{
        contenedor_sistema.classList.remove('input_error');
    }

    if(select_provincia.value == ''){
        error = true;
        select_provincia.classList.add('input_error')
    }
    else{
        select_provincia.classList.remove('input_error');
    }

    if(select_canton.value == ''){
        error = true;
        select_canton.classList.add('input_error')
    }
    else{
        select_canton.classList.remove('input_error');
    }

    if(select_distrito.value == ''){
        error = true;
        select_distrito.classList.add('input_error')
    }
    else{
        select_distrito.classList.remove('input_error');
    }

    if(input_direccion_exacta.value == ''){
        error = true;
        input_direccion_exacta.classList.add('input_error')
    }
    else{
        input_direccion_exacta.classList.remove('input_error');
    }

    if(input_descripcion_institucion.value == ''){
        error = true;
        input_descripcion_institucion.classList.add('input_error')
    }
    else{
        input_descripcion_institucion.classList.remove('input_error');
    }

    if(input_referencia_historica.value == ''){
        error = true;
        input_referencia_historica.classList.add('input_error')
    }
    else{
        input_referencia_historica.classList.remove('input_error');
    }

    if(input_ano_fundacion.value == ''){
        error = true;
        input_ano_fundacion.classList.add('input_error')
    }
    else{
        input_ano_fundacion.classList.remove('input_error');
    }

    if(input_telefono.value == ''){
        error = true;
        input_telefono.classList.add('input_error')
    }
    else{
        input_telefono.classList.remove('input_error');
    }

    if(input_primer_nombre.value == ''){
        error = true;
        input_primer_nombre.classList.add('input_error')
    }
    else{
        input_primer_nombre.classList.remove('input_error');
    }

    if(input_segundo_nombre.value == ''){
        error = true;
        input_segundo_nombre.classList.add('input_error')
    }
    else{
        input_segundo_nombre.classList.remove('input_error');
    }

    if(input_primer_apellido.value == ''){
        error = true;
        input_primer_apellido.classList.add('input_error')
    }
    else{
        input_primer_apellido.classList.remove('input_error');
    }

    if(input_segundo_apellido.value == ''){
        error = true;
        input_segundo_apellido.classList.add('input_error')
    }
    else{
        input_segundo_apellido.classList.remove('input_error');
    }

    if(input_correo_encargado.value == ''){
        error = true;
        input_correo_encargado.classList.add('input_error')
    }
    else{
        input_correo_encargado.classList.remove('input_error');
    }

    if(input_departamento.value == ''){
        error = true;
        input_departamento.classList.add('input_error')
    }
    else{
        input_departamento.classList.remove('input_error');
    }

    if(input_telefono_encargado.value == ''){
        error = true;
        input_telefono_encargado.classList.add('input_error')
    }
    else{
        input_telefono_encargado.classList.remove('input_error');
    }

    if(input_identificacion.value == ''){
        error = true;
        input_identificacion.classList.add('input_error')
    }
    else{
        input_identificacion.classList.remove('input_error');
    }




    return error;
};

let obtener_datos = () =>{

    if(!validar_datos()){

        let nombre_institucion = input_nombre_institucion.value;
        let correo_institucion = input_correo_institucion.value;
        let cedula_institucion = input_cedula_institucion.value;
        let tipo_institucion = document.querySelector('#cont_tipo_institucion input[type=radio]:checked').value;
        let tipo_sistema = document.querySelector('#cont_tipo_sistema input[type=radio]:checked').value;
        let tipo_colegio = select_tipo_colegio.value;
        let provincia = select_provincia.value;
        let canton = select_canton.value;
        let distrito = select_distrito.value;
        let direccion_exacta = input_direccion_exacta.value;
        let latitud = '-90.0211';
        let longitud = '80.458';
        let idioma = input_infoadicional_idioma.value;
        let religion = input_infoadicional_religion.value;
        let ensenanza = input_infoadicional_ensenanza.value;
        let descripcion_institucion = input_descripcion_institucion.value;
        let referencia_historica = input_referencia_historica.value;
        let ano_fundacion = input_ano_fundacion.value;
        let matricula = input_matricula.value;
        let mensualidad = input_mensualidad.value;
        let portada = 'portada.png';
        let galeria = 'galeria.png';
        let telefono = input_telefono.value;
        let fax = input_fax.value;
        let web = input_web.value;
        let facebook = input_facebook.value;
        let instagram = input_instagram.value;
        let twitter = input_twitter.value;
        let youtube = input_youtube.value;
        let documento = 'documento.pdf';
        let primer_nombre = input_primer_nombre.value;
        let segundo_nombre = input_segundo_nombre.value;
        let primer_apellido = input_primer_apellido.value;
        let segundo_apellido = input_segundo_apellido.value;
        let correo_encargado = input_correo_encargado.value;
        let departamento = input_departamento.value;
        let telefono_encargado = input_telefono_encargado.value;
        let extension = input_extension.value;
        let identificacion = input_identificacion.value;
        let aprobado = false;
        let estado = true;
        

        registrar_centro_educativo(nombre_institucion, correo_institucion, cedula_institucion, tipo_institucion, tipo_sistema, tipo_colegio, provincia, canton, distrito, direccion_exacta, latitud, longitud, idioma, religion, ensenanza, descripcion_institucion, referencia_historica, ano_fundacion, matricula, mensualidad, portada, galeria, telefono, fax, web, facebook, instagram, twitter, youtube, documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_encargado, departamento, telefono_encargado, extension, identificacion, aprobado, estado);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'No se pudo agregar el  Centro Educativo',
            text: 'Por favor revisar los campos resaltados'
        });
    }
};

btn_enviar.addEventListener('click', obtener_datos);