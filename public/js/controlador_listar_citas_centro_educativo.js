'use strict';

const input_filtrar = document.querySelector('#txt_buscar_cita');

let lista_citas = listar_citas();

input_filtrar.addEventListener('keyup', mostrar_datos);

mostrar_datos();

function mostrar_datos() {


    const tabla = document.querySelector('#tbl_citas tbody');
    let filtro = input_filtrar.value;
    let id_centro_educativo = localStorage.getItem('id_usuario');   
    
    tabla.innerHTML = '';

    for (let i = 0; i < lista_citas.length; i++) {

        let padre_familia = buscar_padre_familia(lista_citas[i]['id_padre_familia']);
      
            if (lista_citas[i]['id_centro_educativo'].includes(id_centro_educativo)) {
                if(padre_familia['primer_nombre'].toLowerCase().includes(filtro.toLowerCase())){

                
            

                let fila = tabla.insertRow();
    
                let celda_nombre = fila.insertCell();
                let celda_telefono = fila.insertCell();
                let celda_correo = fila.insertCell();
                let celda_fecha = fila.insertCell();
                let celda_hora = fila.insertCell();
                let celda_comentario = fila.insertCell();
                let celda_accion = fila.insertCell();
    
                let fecha_cita = new Date(lista_citas[i]['fecha']);
                let formato_fecha = fecha_cita.getDate() + "-" + (fecha_cita.getMonth() + 1) + "-" + fecha_cita.getFullYear();
          
                celda_nombre.innerHTML = padre_familia['primer_nombre'] + ' ' + padre_familia['primer_apellido']  + ' '  + padre_familia['segundo_apellido'];
    
                celda_telefono.innerHTML = padre_familia['telefono'];
    
                celda_correo.innerHTML = padre_familia['correo'];
    
                celda_fecha.innerHTML = formato_fecha;
    
                celda_hora.innerHTML = lista_citas[i]['hora'];
    
                celda_comentario.innerHTML = lista_citas[i]['comentario'];
    
                celda_accion.innerHTML = '<i class="fas fa-times fa-2x"></i>';
    
                }
        }
        

    };
};




