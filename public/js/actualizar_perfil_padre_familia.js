'use strict';

const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_correo = document.querySelector('#email_correo');
const input_telefono = document.querySelector('#txt_telefono');
const input_cantidad_hijos = document.querySelector('#txt_cant_hijos');
const input_edad_hijos = document.querySelector('#txt_edad_hijos');
const select_nacionalidad = document.querySelector('#select_nacionalidad');
const input_identificacion = document.querySelector('#txt_identificacion');
const select_tipo_identificacion = document.querySelector('#select_tipo_identificacion');
const input_foto_padre_familia = document.querySelector('#url_foto_perfil');
const foto_padre_familia = document.querySelector('#img_padre_familia');
const contrasena = document.querySelector('#txt_contrasena');
const verificar_contrasena = document.querySelector('#txt_verificar_contrasena');
const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito');
const btn_actualizar = document.querySelector('#btn_enviar');
const boton_subir_foto = document.querySelector('#btn_subir_foto');


let _id = localStorage.getItem('id_usuario');
let padre_familia = buscar_padre_familia(_id);

let mostrar_datos = () => {
    input_primer_nombre.value = padre_familia[0]['primer_nombre'];
    input_segundo_nombre.value = padre_familia[0]['segundo_nombre'];
    input_primer_apellido.value = padre_familia[0]['primer_apellido'];
    input_segundo_apellido.value = padre_familia[0]['segundo_apellido'];

    input_correo.value = padre_familia[0]['correo'];
    input_telefono.value = padre_familia[0]['telefono'];
    input_cantidad_hijos.value = padre_familia[0]['cantidad_hijos'];
    input_edad_hijos.value = padre_familia[0]['edad_hijos'];
    select_nacionalidad.value = padre_familia[0]['nacionalidad'];
    input_identificacion.value = padre_familia[0]['identificacion'];
    select_tipo_identificacion.value = padre_familia[0]['tipo_identificacion'];
    input_foto_padre_familia.value = padre_familia[0]['foto_perfil'];
    foto_padre_familia.src = padre_familia[0]['foto_perfil'];
    contrasena.value = padre_familia[0]['contrasena'];
    verificar_contrasena.value = padre_familia[0]['contrasena'];




    let opciones_provincias = document.querySelectorAll('#txt_provincia option');
    for (let i = 0; i < opciones_provincias.length; i++) {
        if (opciones_provincias[i].textContent == padre_familia[0]['provincia']) {
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_cantones = document.querySelectorAll('#txt_canton option');
    for (let i = 0; i < opciones_cantones.length; i++) {
        if (opciones_cantones[i].textContent == padre_familia[0]['canton']) {
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
    }
    let opciones_distrito = document.querySelectorAll('#txt_distrito option');
    for (let i = 0; i < opciones_distrito.length; i++) {
        if (opciones_distrito[i].textContent == padre_familia[0]['distrito']) {
            opciones_distrito[i].selected = true;
        }
    }

};


let validar = () => {
    let error = false;
    if (input_primer_nombre.value == '') {
        error = true;
        input_primer_nombre.classList.remove('borde');
        input_primer_nombre.classList.add('error_input');
    } else {
        input_primer_nombre.classList.add('borde');
        input_primer_nombre.classList.remove('error_input');
    }
    if (input_primer_apellido.value == '') {
        error = true;
        input_primer_apellido.classList.remove('borde');
        input_primer_apellido.classList.add('error_input');
    } else {
        input_primer_apellido.classList.add('borde');
        input_primer_apellido.classList.remove('error_input');
    }
    if (input_correo.value == '') {
        error = true;
        input_correo.classList.remove('borde');
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.add('borde');
        input_correo.classList.remove('error_input');
    }
    if (input_cantidad_hijos.value == '') {
        error = true;
        input_cantidad_hijos.classList.remove('borde');
        input_cantidad_hijos.classList.add('error_input');
    } else {
        input_cantidad_hijos.classList.add('borde');
        input_cantidad_hijos.classList.remove('error_input');
    }
    if (input_edad_hijos.value == '') {
        error = true;
        input_edad_hijos.classList.remove('borde');
        input_edad_hijos.classList.add('error_input');
    } else {
        input_edad_hijos.classList.add('borde');
        input_edad_hijos.classList.remove('error_input');
    }

    if (select_nacionalidad.value == '') {
        error = true;
        select_nacionalidad.classList.remove('borde');
        select_nacionalidad.classList.add('error_input');
    } else {
        select_nacionalidad.classList.add('borde');
        select_nacionalidad.classList.remove('error_input');
    }
    if (input_identificacion.value == '') {
        error = true;
        input_identificacion.classList.remove('borde');
        input_identificacion.classList.add('error_input');
    } else {
        input_identificacion.classList.add('borde');
        input_identificacion.classList.remove('error_input');
    }
    if (select_tipo_identificacion.value == '') {
        error = true;
        select_tipo_identificacion.classList.remove('borde');
        select_tipo_identificacion.classList.add('error_input');
    } else {
        select_tipo_identificacion.classList.add('borde');
        select_tipo_identificacion.classList.remove('error_input');
    }/*
    if (select_provincia.value == '') {
        error = true;
        select_provincia.classList.remove('borde');
        select_provincia.classList.add('error_select');
    } else {
        select_provincia.classList.add('borde');
        select_provincia.classList.remove('error_select');
    }
    if (select_canton.value == '') {
        error = true;
        select_canton.classList.remove('borde');
        select_canton.classList.add('error_datalist');
    } else {
        select_canton.classList.add('borde');
        select_canton.classList.remove('error_datalist');
    }
    if (select_distrito.value == '') {
        error = true;
        select_distrito.classList.remove('borde');
        select_distrito.classList.add('error_datalist');
    } else {
        select_distrito.classList.add('borde');
        select_distrito.classList.remove('error_datalist');
    }*/
    if (contrasena.value == '') {
        error = true;
        contrasena.classList.remove('borde');
        contrasena.classList.add('input_error');
    }
    else {
        contrasena.classList.remove('input_error');
    }
    if (verificar_contrasena.value == '') {
        error = true;
        verificar_contrasena.classList.remove('borde');
        verificar_contrasena.classList.add('input_error');
    }
    else {
        verificar_contrasena.classList.remove('input_error');
    }
    if (verificar_contrasena.value != contrasena.value) {
        error = true;
        verificar_contrasena.classList.remove('borde');
        contrasena.classList.remove('borde');
        contrasena.classList.add('input_error');
        verificar_contrasena.classList.add('input_error');
    }
    else {
        verificar_contrasena.classList.add('borde');
        contrasena.classList.add('borde');
        contrasena.classList.remove('input_error');
        verificar_contrasena.classList.remove('input_error');
    }

    return error;
};

let obtener_datos = () => {
    if (validar() == false) {
        let foto = input_foto_padre_familia.value;

        let primer_nombre = input_primer_nombre.value;
        let segundo_nombre = input_segundo_nombre.value;
        let primer_apellido = input_primer_apellido.value;
        let segundo_apellido = input_segundo_apellido.value;
        let correo = input_correo.value;
        let telefono = input_telefono.value;
        let cantidad_hijos = input_cantidad_hijos.value;
        let edad_hijos = input_edad_hijos.value;
        let nacionalidad = select_nacionalidad.value;
        let identificacion = input_identificacion.value;
        let tipo_identificacion = select_tipo_identificacion.value;

        let provincia = buscar_provincia();
                let canton = buscar_canton();
                let distrito = buscar_distrito();
      /* 
        let provincia = select_provincia.selectedOptions[0].textContent;
        let canton = select_canton.selectedOptions[0].textContent;
        let distrito = select_distrito.selectedOptions[0].textContent;
*/
        let contrasena_pf = contrasena.value;
        
      
               
        Swal.fire({
            title: '¿Está seguro que desea actualizar su perfil?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                actualizar_padre_familia(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, identificacion, distrito, canton, provincia,  cantidad_hijos, edad_hijos, nacionalidad, telefono,foto, correo, tipo_identificacion, contrasena_pf,_id);
            }
        })



    } else {
        swal.fire({
            type: 'warning',
            title: 'El usuario no se actualizo correctamente',
            text: 'Por favor verifique los campos nuevamente'
        });
    }
}

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
llenar_provincias();
select_provincia.addEventListener('change', llenar_cantones);
select_canton.addEventListener('change', llenar_distritos);
if (padre_familia) {
    mostrar_datos();
}
btn_actualizar.addEventListener('click', obtener_datos);