'use strict';

const tabla_criterios = document.querySelector('#tbl_criterios tbody');
const tabla_rangos = document.querySelector('#tbl_rangos tbody');
const input_filtrar = document.querySelector('#txt_buscar');
const btn_evaluacion = document.querySelector('#btn_evaluacion');
const btn_registar = document.querySelector('#btn_registrar');
const btn_modificar = document.querySelector('#btn_modificar');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario !='administrador') {
    window.location.href = `iniciar_sesion.html`;
}

let lista_criterios = listar_criterios_evaluacion();
let rangos_puntuacion = listar_rangos_puntuacion();
let total = 0;
let cantidad_criterios = 0;

let mostrar_criterios = () =>{
    tabla_criterios.innerHTML = '';
    cantidad_criterios = 0;
    let filtro = input_filtrar.value;
    
    for(let i = 0; i < lista_criterios.length; i++){
        if(lista_criterios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tabla_criterios.insertRow();
            
            let posicion = fila.insertCell();
            posicion.innerHTML = i+1;
            posicion.classList.add('td_posicion');

            fila.insertCell().innerHTML = lista_criterios[i]['nombre'];
        
            let accion = fila.insertCell();
            accion.classList.add('td_accion');
    
            let btn_modificar = document.createElement('a');
            btn_modificar.href = `./modificar_criterio_evaluacion.html?id_criterio=${lista_criterios[i]['_id']}`;
    
            let icono_modificar = document.createElement('i');
            icono_modificar.classList.add('far', 'fa-edit');

            let btn_eliminar = document.createElement('a');
            btn_eliminar.dataset.id_criterio = lista_criterios[i]['_id'];
            btn_eliminar.href = '#';
            btn_eliminar.addEventListener('click', borrar_criterio);

            let icono_eliminar = document.createElement('i');
            icono_eliminar.classList.add('far', 'fa-trash-alt');
    
            btn_modificar.appendChild(icono_modificar);
            btn_eliminar.appendChild(icono_eliminar);

            accion.appendChild(btn_modificar);
            accion.appendChild(btn_eliminar);
        }

       
       cantidad_criterios++;
    }
};

let mostrar_rangos = () =>{
    tabla_rangos.innerHTML = '';
    let fila0 = tabla_rangos.insertRow();
            
    let rango0 = fila0.insertCell();
    rango0.innerHTML = '0 - ' + rangos_puntuacion[0]['estrella1'] + ' puntos';

    let estrellas0 = fila0.insertCell();
    estrellas0.innerHTML = '<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';

    let fila1 = tabla_rangos.insertRow();
            
    let rango1 = fila1.insertCell();
    rango1.innerHTML = rangos_puntuacion[0]['estrella1'] +' - ' + rangos_puntuacion[0]['estrella2'] + ' puntos';

    let estrellas1 = fila1.insertCell();
    estrellas1.innerHTML = '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';

    let fila2 = tabla_rangos.insertRow();
            
    let rango2 = fila2.insertCell();
    rango2.innerHTML = rangos_puntuacion[0]['estrella2'] +' - ' + rangos_puntuacion[0]['estrella3'] + ' puntos';

    let estrellas2 = fila2.insertCell();
    estrellas2.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';


    let fila3 = tabla_rangos.insertRow();
            
    let rango3 = fila3.insertCell();
    rango3.innerHTML = rangos_puntuacion[0]['estrella3'] +' - ' + rangos_puntuacion[0]['estrella4'] + ' puntos';

    let estrellas3 = fila3.insertCell();
    estrellas3.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';


    let fila4 = tabla_rangos.insertRow();
            
    let rango4 = fila4.insertCell();
    rango4.innerHTML = rangos_puntuacion[0]['estrella4'] +' - ' + rangos_puntuacion[0]['estrella5'] + ' puntos';

    let estrellas4 = fila4.insertCell();
    estrellas4.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>';


    let fila5 = tabla_rangos.insertRow();
            
    let rango5 = fila5.insertCell();
    rango5.innerHTML = rangos_puntuacion[0]['estrella5'] +' - 100 ' + 'puntos';

    let estrellas5 = fila5.insertCell();
    estrellas5.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
};

let realizar_evaluacion = () =>{
    if(cantidad_criterios >1){

    }
};

let agregar_criterio = () =>{
    if(cantidad_criterios < 10){
        window.location.href = './registrar_criterio_evaluacion.html';
    }
    else{
        swal.fire({
            type: 'error',
            title: 'No se pueden agregar más criterios de evaluación',
            text: 'El número máximo de criterios ha sido alcanzado'
        });
    }
};

function borrar_criterio(){
    let id_criterio =  this.dataset.id_criterio;
    swal.fire({
        title: '¿Seguro que desea eliminar este criterio?',
        text: "Este criterio será borrado completamente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
            eliminar_criterio(id_criterio);
            lista_criterios = listar_criterios_evaluacion();
            mostrar_criterios();
        }
    });
};


mostrar_criterios();
mostrar_rangos();
input_filtrar.addEventListener('keyup', mostrar_criterios);
btn_evaluacion.addEventListener('click', realizar_evaluacion);
btn_registar.addEventListener('click', agregar_criterio);
btn_modificar.addEventListener('click', function(){
    window.location.href = './modificar_rangos_puntuacion.html';
})