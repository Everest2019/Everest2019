'use strict';

const tabla_reporte = document.querySelector('#tbl_reporte_visitas tbody');
const nombre = document.querySelector('#nombre_ce');

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

let tipo_usuario = localStorage.getItem('tipo_usuario');

let obtener_datos = () => {
    let centro_educativo = new Array();
    if (tipo_usuario == 'administrador') {
        centro_educativo = buscar_centro_educativo(localStorage.getItem('centro_educativo'));
        nombre.innerHTML = centro_educativo['nombre_comercial'];
    }
    else {
        centro_educativo = buscar_centro_educativo(localStorage.getItem('id_usuario'));
        nombre.innerHTML = centro_educativo['nombre_comercial'];
    }
    return centro_educativo;
}
let centro_educativo = obtener_datos();

let visitas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < centro_educativo['visitas'].length; i++) {
    let fecha = new Date(centro_educativo['visitas'][i]['fecha']).getMonth();
    visitas[fecha]++;
}
console.log(visitas);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Meses', 'Visitas'],
        ['Enero', visitas[0]],
        ['Febrero', visitas[1]],
        ['Marzo', visitas[2]],
        ['Abril', visitas[3]],
        ['Mayo', visitas[4]],
        ['Junio', visitas[5]],
        ['Julio', visitas[6]],
        ['Agosto', visitas[7]],
        ['Setiembre', visitas[8]],
        ['Octubre', visitas[9]],
        ['Noviembre', visitas[10]],
        ['Diciembre', visitas[11]]

    ]);

    var options = {
        title: 'Visitas',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

let mostrar_reporte = () => {


    let fila0 = tabla_reporte.insertRow();
    let mes1 = fila0.insertCell();
    mes1.innerHTML = 'Enero';
    let visita1 = fila0.insertCell();
    visita1.innerHTML = visitas[0];


    let fila1 = tabla_reporte.insertRow();
    let mes2 = fila1.insertCell();
    mes2.innerHTML = 'Febrero';
    let visita2 = fila1.insertCell();
    visita2.innerHTML = visitas[1];

    let fila2 = tabla_reporte.insertRow();
    let mes3 = fila2.insertCell();
    mes3.innerHTML = 'Marzo';
    let visita3 = fila2.insertCell();
    visita3.innerHTML = visitas[2];

    let fila3 = tabla_reporte.insertRow();
    let mes4 = fila3.insertCell();
    mes4.innerHTML = 'Abril';
    let visita4 = fila3.insertCell();
    visita4.innerHTML = visitas[3];

    let fila4 = tabla_reporte.insertRow();
    let mes5 = fila4.insertCell();
    mes5.innerHTML = 'Mayo';
    let visita5 = fila4.insertCell();
    visita5.innerHTML = visitas[4];

    let fila5 = tabla_reporte.insertRow();
    let mes6 = fila5.insertCell();
    mes6.innerHTML = 'Junio';
    let visita6 = fila5.insertCell();
    visita6.innerHTML = visitas[5];

    let fila6 = tabla_reporte.insertRow();
    let mes7 = fila6.insertCell();
    mes7.innerHTML = 'Julio';
    let visita7 = fila6.insertCell();
    visita7.innerHTML = visitas[6];

    let fila7 = tabla_reporte.insertRow();
    let mes8 = fila7.insertCell();
    mes8.innerHTML = 'Agosto';
    let visita8 = fila7.insertCell();
    visita8.innerHTML = visitas[7];

    let fila8 = tabla_reporte.insertRow();
    let mes9 = fila8.insertCell();
    mes9.innerHTML = 'Setiembre';
    let visita9 = fila8.insertCell();
    visita9.innerHTML = visitas[8];

    let fila9 = tabla_reporte.insertRow();
    let mes10 = fila9.insertCell();
    mes10.innerHTML = 'Octubre';
    let visita10 = fila9.insertCell();
    visita10.innerHTML = visitas[9];

    let fila10 = tabla_reporte.insertRow();
    let mes11 = fila10.insertCell();
    mes11.innerHTML = 'Noviembre';
    let visita11 = fila10.insertCell();
    visita11.innerHTML = visitas[10];

    let fila11 = tabla_reporte.insertRow();
    let mes12 = fila11.insertCell();
    mes12.innerHTML = 'Diciembre';
    let visita12 = fila11.insertCell();
    visita12.innerHTML = visitas[11];
}
mostrar_reporte();

