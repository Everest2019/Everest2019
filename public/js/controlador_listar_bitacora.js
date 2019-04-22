'use strict';


const tabla = document.querySelector('#tabla_articulo tbody');
const input_filtro = document.querySelector('#txt_filtrar');

let acciones = listar_acciones_bitacora();

let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

let mostrar_datos = () => {


    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < acciones.length; i++) {

        let fecha = new Date(acciones[i]['fecha']);
        let dia = String(fecha.getDate()).padStart(2, '0');
        let mes =  meses[fecha.getMonth()];
        let ano = fecha.getFullYear();

        fecha = dia + '/' + mes + '/' + ano;

        if (acciones[i]['usuario'].toLowerCase().includes(filtro.toLowerCase()) || fecha.toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = acciones[i]['usuario'];
            fila.insertCell().innerHTML = acciones[i]['detalle'];
        
            let celda_fecha = fila.insertCell();
            celda_fecha.classList.add('td_fecha');
            celda_fecha.innerHTML = dia + '/ ' + mes  + ' /' + ano ;
        }
    };
};

mostrar_datos();
input_filtro.addEventListener('keyup',mostrar_datos);