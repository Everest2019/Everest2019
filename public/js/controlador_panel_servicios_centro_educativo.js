'use strict';
const nombre = document.querySelector('#nombre_ce');
const contenedor_servicios = document.querySelector('#contenedor_servicios');

let id_centro_educativo = localStorage.getItem('id_usuario');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];
console.log(centro_educativo['servicios'].length);

for(let i = 0; i < centro_educativo['servicios'].length; i++){

    if(centro_educativo['servicios'][i]['servicio'] == 'Transporte'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-bus', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Transporte';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Comedor'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-utensils', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Comedor';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Soda'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-hamburger', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Soda';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Iglesia'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-church', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Iglesia';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Bachillerato Internacional'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-user-graduate', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Bachillerato Internacional';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Gimnasio'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-dumbbell', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Gimnasio';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Zona Verde'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-leaf', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Zonas Verdes';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }

    if(centro_educativo['servicios'][i]['servicio'] == 'Guardería'){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-baby', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('texto_servicio');

        let texto = document.createElement('p');
        texto.innerText = 'Guardería';

        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
    }
}

if(centro_educativo['servicios'].length == 0){
        let contenedor_icono = document.createElement('div');
        contenedor_icono.classList.add('contenedor_icono_servicio', 'icono_info');

        let icono = document.createElement('i');
        icono.classList.add('fas', 'fa-info', 'fa-3x', 'icono');

        let contenedor_texto = document.createElement('div');
        contenedor_texto.classList.add('servicios_vacios');

        let texto = document.createElement('p');
        texto.innerText = 'Este Centro Educativo no ofrece servicios adicionales';
        contenedor_icono.appendChild(icono);
        contenedor_texto.appendChild(texto);

        contenedor_servicios.appendChild(contenedor_icono);
        contenedor_servicios.appendChild(contenedor_texto);
}


inicio.addEventListener('click', function(){
    if(localStorage.getItem('tipo_usuario') == 'administrador'){
        window.location.href = './panel_administrador_instituciones.html';
    }
    else{
        window.location.href = './instituciones.html';
    }
});

inicio.classList.add('estilos_a');