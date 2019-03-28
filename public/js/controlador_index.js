const boton_redirigir_instituciones = document.querySelector('#btn_instituciones');

let redirigir_instituciones = () =>{
    window.location.href = './instituciones.html';
};

boton_redirigir_instituciones.addEventListener('click', redirigir_instituciones);