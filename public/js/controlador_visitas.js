'use strict';

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

let tipo_usuario = localStorage.getItem('tipo_usuario');



let obtener_datos = () =>{
    let centro_educativo = new Array();
    if(tipo_usuario == 'administrador'){
         centro_educativo = buscar_centro_educativo(localStorage.getItem('centro_educativo'));
    }
    else{
         centro_educativo = buscar_centro_educativo(localStorage.getItem('id_usuario'));
    }
    return centro_educativo;
}
let centro_educativo = obtener_datos();

let visitas = [0,0,0,0,0,0,0,0,0,0,0,0];

for(let i = 0; i < centro_educativo['visitas'].length; i++){
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

