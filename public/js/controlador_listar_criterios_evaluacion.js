'use strict';

const tabla_criterios = document.querySelector('#tbl_criterios tbody');
const input_filtrar = document.querySelector('#txt_buscar');
const btn_evaluacion = document.querySelector('#btn_evaluacion');
const btn_registar = document.querySelector('#btn_registrar');

let lista_criterios = listar_criterios_evaluacion();
let total = 0;
let cantidad_criterios = 0;

let mostrar_criterios = () =>{
    tabla_criterios.innerHTML = '';
    total = 0;
    cantidad_criterios = 0;
    let filtro = input_filtrar.value;
    
    for(let i = 0; i < lista_criterios.length; i++){
        if(lista_criterios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tabla_criterios.insertRow();
            
            let posicion = fila.insertCell();
            posicion.innerHTML = i+1;
            posicion.classList.add('td_posicion');

            fila.insertCell().innerHTML = lista_criterios[i]['nombre'];
            let valor = fila.insertCell();
            valor.innerHTML= lista_criterios[i]['valor'];
            valor.classList.add('td_valor');
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
       total = total + parseInt(lista_criterios[i]['valor']);
       
       cantidad_criterios++;
    }
    let fila = tabla_criterios.insertRow();

    fila.insertCell();
    let fila_texto_total = fila.insertCell();
    fila_texto_total.innerHTML = "Total de puntos";

    let fila_total = fila.insertCell();
    fila_total.innerHTML = total;
    fila_total.classList.add('celda_total');

    fila.insertCell();
};

let realizar_evaluacion = () =>{
    if(total != 100){
        swal.fire({
            type: 'error',
            title: 'No se pueden realizar evaluaciones',
            text: 'El puntaje total de los criterios no es de 100 puntos'
        });
    }
    else{
        
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
input_filtrar.addEventListener('keyup', mostrar_criterios);
btn_evaluacion.addEventListener('click', realizar_evaluacion);
btn_registar.addEventListener('click', agregar_criterio);