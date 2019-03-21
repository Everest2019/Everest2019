'use strict';

const nombre = document.querySelector('#nombre_ce');
const web = document.querySelector('#pagina_web');
const correo = document.querySelector('#correo_electronico');
const telefono = document.querySelector('#telefono');
const fax = document.querySelector('#fax');
const contenedor_redes = document.querySelector('#iconos_redes');


let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];
web.innerHTML = centro_educativo['pagina_web'];
correo.innerHTML = centro_educativo['correo'];
telefono.innerHTML += centro_educativo['telefono'];
fax.innerHTML += centro_educativo['fax'];



if(!centro_educativo['facebook'] == ''){

    let url_facebook = document.createElement('a');
    url_facebook.href = 'https://' + centro_educativo['facebook'];

    let icono_facebook = document.createElement('i');
    icono_facebook.classList.add('fab', 'fa-facebook-square', 'fa-4x' ,'primer_icono');

    url_facebook.appendChild(icono_facebook);
    contenedor_redes.appendChild(url_facebook);
}

if(!centro_educativo['instagram'] == ''){

    let url_instagram = document.createElement('a');
    url_instagram.href = 'https://' + centro_educativo['instagram'];

    let icono_instagram = document.createElement('i');
    icono_instagram.classList.add('fab', 'fa-instagram', 'fa-4x');

    url_instagram.appendChild(icono_instagram);
    contenedor_redes.appendChild(url_instagram);
}

if(!centro_educativo['twitter'] == ''){

    let url_twitter = document.createElement('a');
    url_twitter.href = 'https://' + centro_educativo['twitter'];

    let icono_twitter = document.createElement('i');
    icono_twitter.classList.add('fab', 'fa-twitter', 'fa-4x');

    url_twitter.appendChild(icono_twitter);
    contenedor_redes.appendChild(url_twitter);
}

if(!centro_educativo['youtube'] == ''){

    let url_youtube = document.createElement('a');
    url_youtube.href = 'https://' + centro_educativo['youtube'];

    let icono_youtube = document.createElement('i');
    icono_youtube.classList.add('fab', 'fa-youtube', 'fa-4x');

    url_youtube.appendChild(icono_youtube);
    contenedor_redes.appendChild(url_youtube);
}

//Verificar si el centro educativo no tiene redes sociales agregadas
if(centro_educativo['facebook'] == '' && centro_educativo['instagram'] == '' && centro_educativo['twitter'] == '' && centro_educativo['youtube'] == ''){

    let redes_vacias = document.createElement('h1');
    redes_vacias.textContent = 'Este centro educativo no cuenta con redes sociales';

    contenedor_redes.appendChild(redes_vacias);
}