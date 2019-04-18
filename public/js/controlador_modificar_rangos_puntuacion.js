'use strict';

const input_estrella1 = document.querySelector('#txt_estrella1');
const input_estrella2 = document.querySelector('#txt_estrella2');
const input_estrella3 = document.querySelector('#txt_estrella3');
const input_estrella4 = document.querySelector('#txt_estrella4');
const input_estrella5 = document.querySelector('#txt_estrella5');

const btn_modificar = document.querySelector('#boton_modificar');

let rangos_puntuacion = listar_rangos_puntuacion();

let llenar_campos = () =>{
    input_estrella1.value = rangos_puntuacion[0]['estrella1'];
    input_estrella2.value = rangos_puntuacion[0]['estrella2'];
    input_estrella3.value = rangos_puntuacion[0]['estrella3'];
    input_estrella4.value = rangos_puntuacion[0]['estrella4'];
    input_estrella5.value = rangos_puntuacion[0]['estrella5'];
};

let validar_datos = () =>{
    let error = false;

    if(input_estrella1.value == ''){
        error = true;
        input_estrella1.classList.remove('borde');
        input_estrella1.classList.add('input_error');
    }
    else if(input_estrella1.value >= 100){
        error = true;
        input_estrella1.classList.remove('borde');
        input_estrella1.classList.add('input_error');
    }
    else if(input_estrella1.value <= 0){
        error = true;
        input_estrella1.classList.remove('borde');
        input_estrella1.classList.add('input_error');
    }
    else if(input_estrella1.value > input_estrella2.value){
        error = true;
        input_estrella1.classList.remove('borde');
        input_estrella1.classList.add('input_error');
    }
    else{
        input_estrella1.classList.remove('input_error');
        input_estrella1.classList.add('borde');
    }



    if(input_estrella2.value == ''){
        error = true;
        input_estrella2.classList.remove('borde');
        input_estrella2.classList.add('input_error');
    }
    else if(input_estrella2.value >= input_estrella3.value){
        error = true;
        input_estrella2.classList.remove('borde');
        input_estrella2.classList.add('input_error');
    }
    else if(input_estrella2.value <= input_estrella1.value){
        error = true;
        input_estrella2.classList.remove('borde');
        input_estrella2.classList.add('input_error');
    }
    else{
        input_estrella2.classList.remove('input_error');
        input_estrella2.classList.add('borde');
    }

    if(input_estrella3.value == ''){
        error = true;
        input_estrella3.classList.remove('borde');
        input_estrella3.classList.add('input_error');
    }
    else if(input_estrella3.value >= input_estrella4.value){
        error = true;
        input_estrella3.classList.remove('borde');
        input_estrella3.classList.add('input_error');
    }
    else if(input_estrella3.value <= input_estrella2.value){
        error = true;
        input_estrella3.classList.remove('borde');
        input_estrella3.classList.add('input_error');
    }
    else{
        input_estrella3.classList.remove('input_error');
        input_estrella3.classList.add('borde');
    }

    if(input_estrella4.value == ''){
        error = true;
        input_estrella4.classList.remove('borde');
        input_estrella4.classList.add('input_error');
    }
    else if(input_estrella4.value >= input_estrella5.value){
        error = true;
        input_estrella4.classList.remove('borde');
        input_estrella4.classList.add('input_error');
    }
    else if(input_estrella4.value <= input_estrella3.value){
        error = true;
        input_estrella4.classList.remove('borde');
        input_estrella4.classList.add('input_error');
    }
    else{
        input_estrella4.classList.remove('input_error');
        input_estrella4.classList.add('borde');
    }

    if(input_estrella5.value == ''){
        error = true;
        input_estrella5.classList.remove('borde');
        input_estrella5.classList.add('input_error');
    }
    else if(input_estrella5.value >= 100){
        error = true;
        input_estrella5.classList.remove('borde');
        input_estrella5.classList.add('input_error');
    }
    else if(input_estrella5.value <= input_estrella4.value){
        error = true;
        input_estrella5.classList.remove('borde');
        input_estrella5.classList.add('input_error');
    }
    else{
        input_estrella5.classList.remove('input_error');
        input_estrella5.classList.add('borde');
    }

    return error;
};


let obtener_datos = () =>{
    if(!validar_datos()){
        let estrella1 = input_estrella1.value;
        let estrella2 = input_estrella2.value;
        let estrella3 = input_estrella3.value;
        let estrella4 = input_estrella4.value;
        let estrella5 = input_estrella5.value;

        swal.fire({
            type: 'warning',
            title: 'Modificar Criterio',
            text: '¿Seguro que desea modificar este criterio de evaluación?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                modificar_rangos_puntuacion(rangos_puntuacion[0]['_id'],estrella1,estrella2,estrella3,estrella4,estrella5);
            }
          });
    }
    else{
        swal.fire({
            title: 'No se pudo modificar el criterio',
            text: 'Revise los campos resaltados',
            type: 'warning'
        });
    }
};
btn_modificar.addEventListener('click', obtener_datos);
llenar_campos();