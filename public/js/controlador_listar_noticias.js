'use strict';
const lista_noticias = document.querySelector('#lista_noticias');

let mostar_datos = () => {
    let noticias = listar_noticias();


    for (let i = 0; noticias.length; i++) {

        document.getElementById('lista_noticias').innerHTML +=

            '<div class="contenedor_grid">'+
                '<div id="elemento">'
                    '<h1>'+noticias[i]['titulo']+'</h1>'+
                    
                '</div>'+
            '</div>'
    }
};