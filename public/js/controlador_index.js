const boton_redirigir_instituciones = document.querySelector('#btn_instituciones');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='padre_familia'){
    window.location.href = `iniciar_sesion.html`;
}

let redirigir_instituciones = () =>{
    window.location.href = './instituciones.html';
};

boton_redirigir_instituciones.addEventListener('click', redirigir_instituciones);