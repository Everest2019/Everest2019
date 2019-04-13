'use stric';
const btn_citas = document.querySelector('#btn_citas');

//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

btn_citas.addEventListener('click', function(){
  window.location.href = './panel_centro_educativo_citas.html';
})