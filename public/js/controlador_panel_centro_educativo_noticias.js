'use strict';

const input_filtrar = document.querySelector('#txt_buscar');
const btn_agregar_noticias = document.querySelector('#btn_agregar');
const nombre = document.querySelector('#nombre_ce');

//Inicio Sesión
let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

let noticias = listar_noticias();
//let todas_las_noticias = listar_noticias();
let noticias =  listar_noticias();


let centro_educativo = localStorage.getItem('id_usuario');
input_filtrar.addEventListener('keyup', mostrar_noticias);

let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];


/*let filtrar_noticias = () => {
    if (todas_las_noticias[i]['id_centro_educativo'].includes(id_centro_educativo)) {

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
      let editar = document.createElement('a');
      editar.textContent= 'edit';
      editar.href = `editar_noticia.html?id_noticia=${noticias[0]['_id']}`;
      editar.classList.add('btn_editar');
      descripcion_noticia.appendChild(editar);



      //todo
      noticia.appendChild(titulo_noticia);
      noticia.appendChild(fecha_noticia);
      noticia.appendChild(descripcion_noticia);

      lista_noticias.appendChild(noticia);
    }
};*/

function mostrar_noticias() {

    const tabla = document.querySelector('#lista_noticias tbody');//tabla
    let filtro = input_filtrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {
      //  if (noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
            if (noticias[i]['id_centro_educativo'].includes(centro_educativo)){
             console.log(noticias[i]['titulo']);
            let fila = tabla.insertRow();

            let fecha = new Date(noticias[i]['fecha']);
            fecha = fecha.toLocaleDateString();
            fila.insertCell().innerHTML = fecha;
            fila.insertCell().innerHTML =noticias[i]['titulo'];
            fila.insertCell().innerHTML = noticias[i]['descripcion'];
            let celda_configuracion= fila.insertCell();
            //crear a, href, textContent, appendChild en celda
            let boton_editar = document.createElement('a');
            boton_editar.textContent= 'edit';
            boton_editar.href = `editar_noticia.html?id_noticia=${noticias[i]['_id']}`;
            boton_editar.classList.add('btn_editar');

            celda_configuracion.appendChild(boton_editar);






//creacion de divas------------------------------------------
              /*  let noticia = document.createElement('div');
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
                //editar ----------
                /*let lapiz = document.createElement('img');
                lapiz.src = '';

                let editar = document.createElement('a');
                editar.textContent= 'edit';
                editar.href = `editar_noticia.html?id_noticia=${noticias[0]['_id']}`;
                editar.classList.add('btn_editar');
                descripcion_noticia.appendChild(editar);



                //todo
                noticia.appendChild(titulo_noticia);
                noticia.appendChild(fecha_noticia);
                noticia.appendChild(descripcion_noticia);

                lista_noticias.appendChild(noticia);*/
            }

    }
}
mostrar_noticias();

btn_agregar_noticias.addEventListener('click', function(){
    window.location.href = './registrar_noticia.html';
});
