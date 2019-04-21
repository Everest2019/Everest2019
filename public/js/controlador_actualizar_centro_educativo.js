'use strict';

// Elementos primer contenedor
const input_nombre_institucion = document.querySelector('#txt_nombre');
const input_correo_institucion = document.querySelector('#txt_correo');

// Elementos segundo contenedor
const input_cedula_institucion = document.querySelector('#txt_cedula');
const select_tipo_colegio = document.querySelector('#txt_tipo_colegio');
const contenedor_tipo_institucion = document.querySelector('#cont_tipo_institucion');
const contenedor_sistema = document.querySelectorAll('#cont_tipo_sistema input[type=radio]');
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
const img_documento1 = document.querySelector('#img_documento1');
const url_archivo_documento2 = document.querySelector('#url_documento2');
const img_documento2 = document.querySelector('#img_documento2');
const url_archivo_documento3 = document.querySelector('#url_documento3');
const img_documento3 = document.querySelector('#img_documento3');

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


const contenedor_idiomas = document.querySelector('#contenedor_idiomas');

const contenedor_servicios = document.querySelectorAll('#checkbox_servicios');

//Contraseña

const contrasena = document.querySelector('#txt_contrasena');

//Boton de enviar
const btn_modificar_institucion = document.querySelector('#btn_modificar_institucion');

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

//Primera validacion
let validacion_primer_slide = () =>{
    let error = false;
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

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Segunda validacion
let validacion_segundo_slide = () =>{
    let error = false;
    let radio_institucion = document.querySelector('#cont_tipo_institucion input[type=radio]:checked');
    let radio_sistema = document.querySelector('#cont_tipo_sistema input[type=radio]:checked');

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

    if(select_tipo_colegio.disabled == true){
        select_tipo_colegio.classList.remove('input_error');
    }

    if(select_tipo_colegio.disabled == false){
        if(select_tipo_colegio.value == ''){
            error = true;
            select_tipo_colegio.classList.add('input_error')
        }
        else{
            select_tipo_colegio.classList.remove('input_error');
        }
    }

    if(radio_sistema == null){
        error = true;
        contenedor_sistema.classList.add('input_error')
    }
    else{
        contenedor_sistema.classList.remove('input_error');
    }


    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Tercera validacion
let validacion_tercer_slide = () =>{
    let error = false;

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

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Setima validacion
let validacion_setimo_slide = () =>{
    let error = false;
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

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Novena validacion
let validacion_noveno_slide = () =>{
    let error = false;
    if(url_logo_institucion.value == ''){
        error = true;
        img_logo_institucion.classList.add('input_error')
    }
    else{
        img_logo_institucion.classList.remove('input_error');
    }

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Decima validacion
let validacion_decimo_slide = () =>{
    let error = false;
    if(url_img_portada.value == ''){
        error = true;
        img_portada_institucion.classList.add('input_error')
    }
    else{
        img_portada_institucion.classList.remove('input_error');
    }

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Doceava validacion
let validacion_doceavo_slide = () =>{
    let error = false;
    if(input_telefono.value == ''){
        error = true;
        input_telefono.classList.add('input_error')
    }
    else{
        input_telefono.classList.remove('input_error');
    }

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Catorceava validacion
let validacion_catorceavo_slide = () =>{
    let error = false;
    if(input_primer_nombre.value == ''){
        error = true;
        input_primer_nombre.classList.add('input_error')
    }
    else{
        input_primer_nombre.classList.remove('input_error');
    }

    if(input_primer_apellido.value == ''){
        error = true;
        input_primer_apellido.classList.add('input_error')
    }
    else{
        input_primer_apellido.classList.remove('input_error');
    }

    if(input_correo_encargado.value == ''){
        error = true;
        input_correo_encargado.classList.add('input_error');
    }
    else{
        input_correo_encargado.classList.remove('input_error');
    }

    if(input_departamento.value == ''){
        error = true;
        input_departamento.classList.add('input_error');
    }
    else{
        input_departamento.classList.remove('input_error');
    }

    if(input_telefono_encargado.value == ''){
        error = true;
        input_telefono_encargado.classList.add('input_error');
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

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};

//Quiceava validacion
let validacion_quinceavo_slide = () =>{
    let error = false;
    if(url_img_encargado.value == ''){
        error = true;
        img_encargado.classList.add('input_error');
    }
    else{
        img_encargado.classList.remove('input_error');
    }

    if(error == false){
        plusSlides(1);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
};


let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id_centro_educativo = url.searchParams.get(param); //Toma el parámetro id del url y retorna el valor
    return id_centro_educativo;
}

let _id = get_param('id_centro_educativo');

let centro_educativo = buscar_centro(_id);
let mostrar_datos = () => {

    input_nombre_institucion.value = centro_educativo[0]['nombre_comercial'];
    input_correo_institucion.value = centro_educativo[0]['correo'];
    input_cedula_institucion.value = centro_educativo[0]['cedula_juridica'];
    //select_tipo_colegio.value = centro_educativo[0]['modalidad'];
    
    if(centro_educativo[0]['tipo_institucion'] == 'Escuela'){
        radios_tipo_institucion[0].checked = true;
    }
    if(centro_educativo[0]['tipo_institucion'] == 'Colegio'){
        radios_tipo_institucion[1].checked = true;
        habilitar_tipo_colegio();
        select_tipo_colegio.value = centro_educativo[0]['tipo_colegio'];
    }
    if(centro_educativo[0]['tipo_institucion'] == 'Ambos'){
        radios_tipo_institucion[2].checked = true;
        habilitar_tipo_colegio();
        select_tipo_colegio.value = centro_educativo[0]['tipo_colegio'];
    }
    if(centro_educativo[0]['modalidad'] == 'Privado'){
        contenedor_sistema[1].checked = true;
    }
    if(centro_educativo[0]['modalidad'] == 'Público'){
        contenedor_sistema[0].checked = true;
    }
    
    contenedor_tipo_institucion.value = centro_educativo[0]['tipo_colegio'];

    let opciones_provincias = document.querySelectorAll('#txt_provincia option');
    for (let i = 0; i < opciones_provincias.length; i++) {
        if (opciones_provincias[i].textContent == centro_educativo[0]['provincia']) {
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_cantones = document.querySelectorAll('#txt_canton option');
    for (let i = 0; i < opciones_cantones.length; i++) {
        if (opciones_cantones[i].textContent == centro_educativo[0]['canton']) {
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
    }
    let opciones_distrito = document.querySelectorAll('#txt_distrito option');
    for (let i = 0; i < opciones_distrito.length; i++) {
        if (opciones_distrito[i].textContent == centro_educativo[0]['distrito']) {
            opciones_distrito[i].selected = true;
            
        }
    }
    input_direccion_exacta.value = centro_educativo[0]['direccion_exacta'];
    input_latitud.value = centro_educativo[0]['ubicacion_mapa_lat'];
    input_longitud.value = centro_educativo[0]['ubicacion_mapa_lng'];
    input_infoadicional_religion.value = centro_educativo[0]['informacion_religion'];
    input_infoadicional_ensenanza.value = centro_educativo[0]['informacion_ensenanza'];
    input_descripcion_institucion.value = centro_educativo[0]['informacion_general'];
    input_referencia_historica.value = centro_educativo[0]['referencia_historica'];
    input_ano_fundacion.value = centro_educativo[0]['ano_creacion'];
    input_matricula.value = centro_educativo[0]['matricula'];
    input_mensualidad.value = centro_educativo[0]['mensualidad'];

    for(let i = 0; i < checkbox_idiomas.length; i++){
        for(let j = 0; j < centro_educativo[0]['idiomas'].length; j++){
            if(centro_educativo[0]['idiomas'][j]['idioma'] == checkbox_idiomas[i].value){
                checkbox_idiomas[i].checked = true;
            }
        }
        
    }

    for(let i = 0; i < checkbox_servicios.length; i++){
        for(let j = 0; j < centro_educativo[0]['servicios'].length; j++){
            if(centro_educativo[0]['servicios'][j]['servicio'] == checkbox_servicios[i].value){
                checkbox_servicios[i].checked = true;
            }
        }
        
    }
    


    url_logo_institucion.value = centro_educativo[0]['logo'];
    img_logo_institucion.src = centro_educativo[0]['logo'];
    
    url_img_portada.value = centro_educativo[0]['imagen_portada'];
    img_portada_institucion.src =  centro_educativo[0]['imagen_portada'];
  
    url_galeria1.value = centro_educativo[0]['galeria1'];
    img_galeria1.src = centro_educativo[0]['galeria1'];
    
    url_galeria2.value = centro_educativo[0]['galeria2'];
    img_galeria2.src = centro_educativo[0]['galeria2'];

    url_galeria3.value = centro_educativo[0]['galeria3'];
    img_galeria3.src = centro_educativo[0]['galeria3'];

    url_galeria4.value = centro_educativo[0]['galeria4'];
    img_galeria4.src = centro_educativo[0]['galeria4'];

    input_telefono.value = centro_educativo[0]['telefono'];
    input_fax.value = centro_educativo[0]['fax'];
    input_web.value = centro_educativo[0]['pagina_web'];
    input_facebook.value = centro_educativo[0]['facebook'];
    input_instagram.value = centro_educativo[0]['instagram'];
    input_twitter.value = centro_educativo[0]['twitter'];
    input_youtube.value = centro_educativo[0]['youtube'];

    url_archivo_documento1.value = centro_educativo[0]['documento1'];
    if(centro_educativo[0]['documento1']){
        img_documento1.src = './img/document.png';
    }
    url_archivo_documento2.value = centro_educativo[0]['documento2'];
    if(centro_educativo[0]['documento2']){
        img_documento2.src = './img/document.png';
    }
    url_archivo_documento3.value = centro_educativo[0]['documento3'];
    if(centro_educativo[0]['documento3']){
        img_documento3.src = './img/document.png';
    }

    input_primer_nombre.value = centro_educativo[0]['primer_nombre_encargado'];
    input_segundo_nombre.value = centro_educativo[0]['segundo_nombre_encargado'];
    input_primer_apellido.value = centro_educativo[0]['primer_apellido_encargado'];
    input_segundo_apellido.value = centro_educativo[0]['segundo_apellido_encargado'];
    input_correo_encargado.value = centro_educativo[0]['correo_encargado'];
    input_departamento.value = centro_educativo[0]['departamento_encargado'];
    input_telefono_encargado.value = centro_educativo[0]['telefono_encargado'];
    input_extension.value = centro_educativo[0]['extension_encargado'];
    input_identificacion.value = centro_educativo[0]['identificacion_encargado'];
    url_img_encargado.value = centro_educativo[0]['fotografia_encargado'];
    img_encargado.src = centro_educativo[0]['fotografia_encargado'];

};
let lista_idiomas = listar_lenguajes();

for(let i = 0; i < lista_idiomas.length; i++){
    let contenedor = document.createElement('div');

    let label = document.createElement('label');
    label.textContent = lista_idiomas[i]['iso'] + ' - ' + lista_idiomas[i]['nombre']; 

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox_idioma');
    checkbox.value = lista_idiomas[i]['nombre'];

    let bandera = document.createElement('img');
    bandera.src = lista_idiomas[i]['bandera'];

    contenedor.appendChild(checkbox);
    contenedor.appendChild(label);
    contenedor.appendChild(bandera);

    contenedor_idiomas.appendChild(contenedor);
}

const checkbox_idiomas = document.querySelectorAll('#contenedor_idiomas input[type=checkbox]');
const checkbox_servicios = document.querySelectorAll('#checkbox_servicios input[type=checkbox]')


let obtener_datos = () => {
    
    let nombre_institucion = input_nombre_institucion.value;
    let correo_institucion = input_correo_institucion.value;
    let cedula_institucion = input_cedula_institucion.value;
    let tipo_institucion = document.querySelector('#cont_tipo_institucion input[type=radio]:checked').value;
    let tipo_sistema = document.querySelector('#cont_tipo_sistema input[type=radio]:checked').value;
    let tipo_colegio = select_tipo_colegio.value;
    let provincia = buscar_provincia();
    let canton = buscar_canton();
    let distrito = buscar_distrito();
    let direccion_exacta = input_direccion_exacta.value;
    let latitud = input_latitud.value;
    let longitud = input_longitud.value;

    //Informacion adicional

    const idiomas = document.querySelectorAll('#contenedor_idiomas input[type=checkbox]:checked');
    let religion = input_infoadicional_religion.value;
    let ensenanza = input_infoadicional_ensenanza.value;

    let descripcion_institucion = input_descripcion_institucion.value;
    let referencia_historica = input_referencia_historica.value;
    let ano_fundacion = input_ano_fundacion.value;
    let matricula = input_matricula.value;
    let mensualidad = input_mensualidad.value;

    //Servicios adicionales
    const servicios = document.querySelectorAll('#checkbox_servicios input[type=checkbox]:checked');



    let portada = url_img_portada.value;
    let galeria1 = url_galeria1.value;
    let galeria2 = url_galeria2.value;
    let galeria3 = url_galeria3.value;
    let galeria4 = url_galeria4.value;
    let telefono = input_telefono.value;
    let fax = input_fax.value;
    let web = input_web.value;
    let facebook = input_facebook.value;
    let instagram = input_instagram.value;
    let twitter = input_twitter.value;
    let youtube = input_youtube.value;
    let logo = url_logo_institucion.value;
    let documento1 = url_archivo_documento1.value;
    let documento2 = url_archivo_documento2.value;
    let documento3 = url_archivo_documento3.value;
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let correo_encargado = input_correo_encargado.value;
    let departamento = input_departamento.value;
    let telefono_encargado = input_telefono_encargado.value;
    let extension = input_extension.value;
    let identificacion = input_identificacion.value;
    let fotografia_encargado = url_img_encargado.value;
    let id_centro_educativo = localStorage.getItem('id_usuario');

    Swal.fire({
        title: 'Está seguro que desea actualizar el centro educativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            actualizar_centro_educativo(nombre_institucion, correo_institucion, cedula_institucion, tipo_institucion, tipo_sistema, tipo_colegio, provincia, canton, distrito, direccion_exacta, latitud, longitud, religion, ensenanza, descripcion_institucion, referencia_historica, ano_fundacion, matricula, mensualidad, portada, galeria1, galeria2, galeria3, galeria4, telefono, fax, web, facebook, instagram, twitter, youtube, logo, documento1, documento2, documento3, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_encargado, departamento, telefono_encargado, extension, identificacion, fotografia_encargado, id_centro_educativo);

            for (let i = 0; i < centro_educativo[0]['idiomas'].length; i++) {
                eliminar_idioma(centro_educativo[0]['_id'],centro_educativo[0]['idiomas'][i]['idioma']);
            }
            for (let i = 0; i < centro_educativo[0]['servicios'].length; i++) {
                eliminar_servicio(centro_educativo[0]['_id'],centro_educativo[0]['servicios'][i]['servicio']);
            }

            for(let i = 0; i < servicios.length; i++){
                registrar_servicio(cedula_institucion, servicios[i].value);
            }
    
            for(let i = 0; i < idiomas.length; i++){
                registrar_idioma(cedula_institucion, idiomas[i].value);
            }

        }
    })
};

let habilitar_tipo_colegio = () =>{
    select_tipo_colegio.disabled = false;
};

let deshabilitar_tipo_colegio = () =>{
    select_tipo_colegio.disabled = true;
    select_tipo_colegio.value = '';
};

let llenar_provincias = () =>{
        
    for(let i = 0; i < provincias.length; i++){
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincia.appendChild(nuevaOpcion);
    }
};

let llenar_cantones = () =>{
    let provincia = select_provincia.value;
    select_canton.innerHTML = '';
    select_distrito.innerHTML = '<option value="">Distrito</option>';

    for(let i = 0; i < cantones.length; i++){
        if(provincia == cantones[i]['Provincia_idProvincia']){
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['idCanton'];
            select_canton.appendChild(nuevaOpcion);
        }  
    }
};

let llenar_distritos = () =>{
    let canton = select_canton.value;
    select_distrito.innerHTML = '';
    
    for(let i = 0; i < distritos.length; i++){
        if(canton == distritos[i]['Canton_idCanton']){
            let nuevaOpcion = new Option(distritos[i]['nombre']);
            nuevaOpcion.value = distritos[i]['idDistrito'];
            select_distrito.appendChild(nuevaOpcion);
        }  
    }
};

let buscar_provincia = () =>{
    
    for(let i = 0; i < provincias.length; i++){
        if(select_provincia.value == provincias[i]['idProvincia']){
            var nombre_provincia = provincias[i]['nombre'];
            console.log(nombre_provincia);
        }
    }
    return nombre_provincia;
};


let buscar_canton = () =>{
    
    for(let i = 0; i < cantones.length; i++){
        if(select_canton.value == cantones[i]['idCanton']){
            var nombre_canton = cantones[i]['nombre'];
            console.log(nombre_canton);
        }
    }
    return nombre_canton;
};

let buscar_distrito = () =>{
    
    for(let i = 0; i < distritos.length; i++){
        if(select_distrito.value == distritos[i]['idDistrito']){
            var nombre_distrito = distritos[i]['nombre'];
            console.log(nombre_distrito);
        }
    }
    return nombre_distrito;
};

radios_tipo_institucion[0].addEventListener("click", deshabilitar_tipo_colegio);
radios_tipo_institucion[1].addEventListener("click", habilitar_tipo_colegio);
radios_tipo_institucion[2].addEventListener("click", habilitar_tipo_colegio);
llenar_provincias();
select_provincia.addEventListener('change', llenar_cantones);
select_canton.addEventListener('change', llenar_distritos);
if (centro_educativo) {
    mostrar_datos();
}
btn_modificar_institucion.addEventListener('click', obtener_datos);

//Validaciones por slide
flecha_primer_slide.addEventListener('click', validacion_primer_slide);
flecha_segundo_slide.addEventListener('click', validacion_segundo_slide);
flecha_tercer_slide.addEventListener('click', validacion_tercer_slide);
flecha_setimo_slide.addEventListener('click', validacion_setimo_slide);
flecha_noveno_slide.addEventListener('click', validacion_noveno_slide);
flecha_decimo_slide.addEventListener('click', validacion_decimo_slide);
flecha_doceavo_slide.addEventListener('click', validacion_doceavo_slide);
flecha_catorceavo_slide.addEventListener('click', validacion_catorceavo_slide);
flecha_quinceavo_slide.addEventListener('click', validacion_quinceavo_slide);