const btn_iniciar_sesion = document.querySelector('#btn_iniciar_sesion');
const btn_crear_cuenta = document.querySelector('#btn_crear_cuenta');
const btn_accion1 = document.querySelector('#btn_banner');
const btn_accion2 = document.querySelector('#btn_informacion');
const tabla = document.querySelector('#tbl_top tbody');
const select_criterios = document.querySelector('#select_criterios');

let tipo_usuario = () =>{
    Swal.fire({
        title: 'Elige tu tipo de usuario',
        html: '<div class="separador"></div>'+
    
          '<button type="button" class="btn_centro_educativo" id="btn_centro_educativo"><div><i class="fas fa-school fa-4x"></i></div>Centro Educativo</button>' +
    
          '<button type="button" class="btn_padre_familia" id="btn_padre_familia"><div><i class="fas fa-user fa-4x"></i></div>Padre de Familia</button>',
    
        showConfirmButton: false,
        showCloseButton: true
      });

    const btn_centro_educativo = document.querySelector('#btn_centro_educativo');
    const btn_padre_familia = document.querySelector('#btn_padre_familia');
    btn_centro_educativo.addEventListener('click', agregar_centro_educativo);
    btn_padre_familia.addEventListener('click', registrar_padre_familia);
};

let lista_instituciones = listar_instituciones_top_mep();

let filtrar_criterios = () => {
    switch (select_criterios.value) {
        case 'Todos':
            mostrar_datos();
            break;
        case 'Escuelas publicas':
            mostrar_datos_publicas();
            break;
        case 'Escuelas privadas':
            mostrar_datos_privadas();
            break;
        case 'Colegios_publicas':
            mostrar_colegios_publicos();
            break;
        case 'Colegios_privadas':
            mostrar_colegios_privados();
            break;
    }
};



select_criterios.addEventListener('change', filtrar_criterios);

function mostrar_datos() {
    tabla.innerHTML = '';

    for (let i = 0; i < 10; i++) {

        let fila = tabla.insertRow();
        let celda_posicion = fila.insertCell();
        let celda_logo = fila.insertCell();
        let celda_nombre = fila.insertCell();
        let celda_evaluacion = fila.insertCell();
        celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
        celda_posicion.innerHTML = i + 1;

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');
        if (lista_instituciones[i]['logo']) {
            imagen.src = lista_instituciones[i]['logo'];
        } else {
            imagen.src = 'img/user_icon.png';
        }
        celda_posicion.innerHTML = i + 1;
        celda_posicion.classList.add('td_posicion');
        celda_logo.appendChild(imagen);
        let icono_estrella = document.createElement('i');
        icono_estrella.classList.add('fas', 'fa-star');

        

        celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];
        celda_evaluacion.appendChild(icono_estrella);

    };
};

function mostrar_datos_publicas() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 30; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Escuela' && lista_instituciones[i]['modalidad'] == 'Público') {

            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;

            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];
            let icono_estrella = document.createElement('i');
            icono_estrella.classList.add('fas', 'fa-star');

            celda_evaluacion.appendChild(icono_estrella);
        }

    };
};

function mostrar_datos_privadas() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 30; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Escuela' && lista_instituciones[i]['modalidad'] == 'Privado') {

            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;

            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);

            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];
            let icono_estrella = document.createElement('i');
            icono_estrella.classList.add('fas', 'fa-star');

            celda_evaluacion.appendChild(icono_estrella);

        }
    };
};

//colegios

function mostrar_colegios_publicos() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 30; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Colegio' && lista_instituciones[i]['modalidad'] == 'Público') {

            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;

            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];
            let icono_estrella = document.createElement('i');
            icono_estrella.classList.add('fas', 'fa-star');

            celda_evaluacion.appendChild(icono_estrella);

        }

    };
};

function mostrar_colegios_privados() {
    tabla.innerHTML = '';
    let posicion = 0;
    for (let i = 0; i < 30; i++) {
        if (lista_instituciones[i]['tipo_institucion'] == 'Colegio' && lista_instituciones[i]['modalidad'] == 'Privado') {

            posicion++;


            let fila = tabla.insertRow();
            let celda_posicion = fila.insertCell();
            let celda_logo = fila.insertCell();
            let celda_nombre = fila.insertCell();
            let celda_evaluacion = fila.insertCell();
            celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
            celda_posicion.innerHTML = posicion;

            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');
            if (lista_instituciones[i]['logo']) {
                imagen.src = lista_instituciones[i]['logo'];
            } else {
                imagen.src = 'img/user_icon.png';
            }
            celda_posicion.classList.add('td_posicion');
            celda_logo.appendChild(imagen);


            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];

            celda_evaluacion.innerHTML = lista_instituciones[i]['evaluacion'];
            let icono_estrella = document.createElement('i');
            icono_estrella.classList.add('fas', 'fa-star');

            celda_evaluacion.appendChild(icono_estrella);

        }
    };
};

mostrar_datos();


let agregar_centro_educativo = () =>{
    window.location.href = './registrar_centro_educativo.html';
};

let registrar_padre_familia = () =>{
    window.location.href = './registrar_padre_familia.html';
};

let iniciar_sesion = () =>{
    window.location.href = './Iniciar_sesion.html';
};

btn_crear_cuenta.addEventListener('click',tipo_usuario);
btn_iniciar_sesion.addEventListener('click',iniciar_sesion);
btn_accion1.addEventListener('click',iniciar_sesion);
btn_accion2.addEventListener('click',iniciar_sesion);