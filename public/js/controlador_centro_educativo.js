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

//Contenedor idiomas
const contenedor_idiomas = document.querySelector('#contenedor_idiomas');

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





/*
///////////////////////////////////////
VALIDACIONES GENERALES
///////////////////////////////////////
*/
let validar_datos = () => {
    let error = false;
    let radio_institucion = document.querySelector('#cont_tipo_institucion input[type=radio]:checked');
    let radio_sistema = document.querySelector('#cont_tipo_sistema input[type=radio]:checked');
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

    if(url_logo_institucion.value == ''){
        error = true;
        img_logo_institucion.classList.add('input_error')
    }
    else{
        img_logo_institucion.classList.remove('input_error');
    }

    if(url_img_portada.value == ''){
        error = true;
        img_portada_institucion.classList.add('input_error')
    }
    else{
        img_portada_institucion.classList.remove('input_error');
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

    if(url_img_encargado.value == ''){
        error = true;
        img_encargado.classList.add('input_error');
    }
    else{
        img_encargado.classList.remove('input_error');
    }

    if(contrasena.value == ''){
        error = true;
        contrasena.classList.add('input_error');
    }
    else{
        contrasena.classList.remove('input_error');
    }

    if(verificar_contrasena.value == ''){
        error = true;
        verificar_contrasena.classList.add('input_error');
    }
    else{
        verificar_contrasena.classList.remove('input_error');
    }

    if(verificar_contrasena.value != contrasena.value){
        error = true;
        contrasena.classList.add('input_error');
        verificar_contrasena.classList.add('input_error');
    }
    else{
        contrasena.classList.remove('input_error');
        verificar_contrasena.classList.remove('input_error');
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
        let aprobado = false;
        let estado = true;
        let tipo_usuario = 'centro_educativo';
        let contrasena_ce = contrasena.value;
        
        let provincia = buscar_provincia();
        let canton = buscar_canton();
        let distrito = buscar_distrito();
        
        let codigo = generar_codigo();

        registrar_centro_educativo(nombre_institucion, correo_institucion, cedula_institucion, tipo_institucion, tipo_sistema, tipo_colegio, provincia, canton, distrito, direccion_exacta, latitud, longitud,religion, ensenanza, descripcion_institucion, referencia_historica, ano_fundacion, matricula, mensualidad, portada, galeria1, galeria2, galeria3, galeria4, telefono, fax, web, facebook, instagram, twitter, youtube, logo, documento1, documento2, documento3,primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_encargado, departamento, telefono_encargado, extension, identificacion, fotografia_encargado, aprobado, estado,tipo_usuario, contrasena_ce, codigo);

        for(let i = 0; i < servicios.length; i++){
            registrar_servicio(cedula_institucion, servicios[i].value);
        }

        for(let i = 0; i < idiomas.length; i++){
            registrar_idioma(cedula_institucion, idiomas[i].value);
        }
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'Datos incompletos',
            text: 'Los campos resaltados son obligatorios'
        });
    }
    
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







radios_tipo_institucion[0].addEventListener("click", deshabilitar_tipo_colegio);
radios_tipo_institucion[1].addEventListener("click", habilitar_tipo_colegio);
radios_tipo_institucion[2].addEventListener("click", habilitar_tipo_colegio);
llenar_provincias();
select_provincia.addEventListener('change', llenar_cantones);
select_canton.addEventListener('change', llenar_distritos);
btn_enviar.addEventListener('click', obtener_datos);

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