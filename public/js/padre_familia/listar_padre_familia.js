'use stric';

const tabla = document.querySelector('#tbl_padre_familia tbody');

let mostrar_datos = () =>{
    let usuarios = listar_padre_familia ();
    
    for(let i=0; i<usuarios.length; i++){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = usuarios[i]['primer_nombre'];
        fila.insertCell().innerHTML = usuarios[i]['segundo_nombre'];
        fila.insertCell().innerHTML = usuarios[i]['primer_apellido'];
        fila.insertCell().innerHTML = usuarios[i]['segundo_apellido'];
        fila.insertCell().innerHTML = usuarios[i]['identificacion']
        fila.insertCell().innerHTML = usuarios[i]['cantidad_hijos']
        fila.insertCell().innerHTML = usuarios[i]['edad_hijos']
        fila.insertCell().innerHTML = usuarios[i]['provincia']
        fila.insertCell().innerHTML = usuarios[i]['canton']
        fila.insertCell().innerHTML = usuarios[i]['distrito']
    };
}; 


mostrar_datos();