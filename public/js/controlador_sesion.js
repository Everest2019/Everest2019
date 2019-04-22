'use strict';

const contenedor_mi_perfil = document.querySelector('#navbar_mi_perfil');

if(localStorage.getItem('tipo_usuario') != 'administrador'){
    let link_mi_perfil =  document.createElement('a');
    link_mi_perfil.href = 'perfil_padre_familia.html';
    link_mi_perfil.innerText = 'Mi Perfil';

    let icono_mi_perfil = document.createElement('i');
    icono_mi_perfil.classList.add('fas', 'fa-user-cog');

    link_mi_perfil.appendChild(icono_mi_perfil);
    contenedor_mi_perfil.appendChild(link_mi_perfil);
}

    

