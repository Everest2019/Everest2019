'use strict';
const lista_noticias = document.querySelector('#lista_noticias');
const input_filtrar = document.querySelector('#txt_buscar');
const nombre = document.querySelector('#nombre_ce');

const a_regresar = document.querySelector('#a_regresar');

a_regresar.addEventListener('click', function(){
    if(localStorage.getItem('tipo_usuario') == 'administrador'){
        window.location.href = './panel_administrador_instituciones.html';
    }
    else{
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');

let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];

let noticias = listar_noticias();

let mostrar_noticias = () => {
  lista_noticias.innerHTML = '';
  let filtro = input_filtrar.value;
  
  let centro_educativo = localStorage.getItem('centro_educativo');
  for (let i = 0; i < noticias.length; i++) {
    if (noticias[i]['id_centro_educativo'].includes(centro_educativo)) {
      if (noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {

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

mostrar_noticias();

input_filtrar.addEventListener('keyup', mostrar_noticias);