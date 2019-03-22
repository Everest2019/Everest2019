'use strict';

var body = document.body;
var h1 = document.createElement("h1");
h1.innerHTML = "Prueba de tablas";
var table1 = document.createElement("table");
table1.border="1";
// ciclo correspondiente a la filas
for(i=0;i<10;i++){
    var trx = document.createElement("tr");
        // ciclo correspondiente a las columnas
        for(j=0;j<5;j++){
            var tdx = document.createElement("td");
            tdx.innerHTML = "Fila " + i + " - Columna " + j;
            trx.appendChild(tdx); 
        }
    table1.appendChild(trx);
}
body.appendChild(h1);
body.appendChild(table1);
