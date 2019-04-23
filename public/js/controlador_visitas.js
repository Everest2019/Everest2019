'use strict';

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Meses', 'Posición'],
        ['Enero', 0],
        ['Febrero', 1],
        ['Marzo', 2],
        ['Abril', 3],
        ['Mayo', 4],
        ['Junio', 5],
        ['Julio', 6],
        ['Agosto', 7],
        ['Setiembre', 8],
        ['Octubre', 9],
        ['Noviembre', 10],
        ['Diciembre', 11]

    ]);

    var options = {
        title: 'Visitas',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
