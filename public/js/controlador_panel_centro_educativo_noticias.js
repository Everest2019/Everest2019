'use strict';

const input_filtrar = document.querySelector('#txt_buscar');
const btn_agregar_noticias = document.querySelector('#btn_agregar');
const nombre = document.querySelector('#nombre_ce');
let noticias = listar_noticias();

input_filtrar.addEventListener('keyup', mostrar_noticias);

let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

function mostrar_noticias() {

    const lista_noticias = document.querySelector('#lista_noticias');
    let filtro = input_filtrar.value;

    lista_noticias.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
            centro_educativo = buscar_centro_educativo(noticias[i]['id_centro_educativo']);
            if (noticias[i]['id_centro_educativo'].includes(id_centro_educativo)) {

                let noticia = document.createElement('div');
                noticia.classList.add('noticia');

                let titulo_noticia = document.createElement('div');
                titulo_noticia.classList.add('titulo_noticia');

                let texto_titulo_noticia = document.createElement('p');
                texto_titulo_noticia.innerHTML = noticias[i]['titulo'];

                titulo_noticia.appendChild(texto_titulo_noticia);
                //fecha
                let fecha_noticia = document.createElement('div');
                fecha_noticia.classList.add('fecha_noticia');

                let texto_fecha_noticia = document.createElement('p');
                let fecha = new Date(noticias[i]['fecha']);
                fecha = fecha.toLocaleDateString();
                texto_fecha_noticia.innerHTML = fecha;

                fecha_noticia.appendChild(texto_fecha_noticia);
                //descripcion
                let descripcion_noticia = document.createElement('div');
                descripcion_noticia.classList.add('descripcion_noticia');

                let texto_descricion_noticia = document.createElement('p');
                texto_descricion_noticia.innerHTML = noticias[i]['descripcion'];

                descripcion_noticia.appendChild(texto_descricion_noticia);

                //todo
                noticia.appendChild(titulo_noticia);
                noticia.appendChild(fecha_noticia);
                noticia.appendChild(descripcion_noticia);

                lista_noticias.appendChild(noticia);
            }
        }
    }
}

btn_agregar_noticias.addEventListener('click', function(){
    window.location.href = './registrar_noticia.html';
});

mostrar_noticias();