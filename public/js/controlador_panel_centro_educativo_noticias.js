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


//let todas_las_noticias = listar_noticias();
let noticias =  listar_noticias();





let id_centro_educativo = localStorage.getItem('id_usuario');
let centro_educativo = buscar_centro_educativo(id_centro_educativo);

function mostrar_noticias() {

  const tabla = document.querySelector('#lista_noticias tbody');//tabla
  let filtro = input_filtrar.value;

  tabla.innerHTML = '';

  for (let i = 0; i < noticias.length; i++) {
     if (noticias[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())) {
          if (noticias[i]['id_centro_educativo'].includes(id_centro_educativo)){
           console.log(noticias[i]['titulo']);
          let fila = tabla.insertRow();

          let fecha = new Date(noticias[i]['fecha']);
          fecha = fecha.toLocaleDateString();
          fila.insertCell().innerHTML =noticias[i]['titulo'];
          fila.insertCell().innerHTML = fecha;
          
          fila.insertCell().innerHTML = noticias[i]['descripcion'];
          let celda_configuracion= fila.insertCell();

          let boton_editar = document.createElement('a');
          boton_editar.innerHTML='<i class="far fa-edit"></i>';
          boton_editar.href = `editar_noticia.html?id_noticia=${noticias[i]['_id']}`;
          boton_editar.classList.add('btn_editar');

          let boton_eliminar = document.createElement('a');
          boton_eliminar.innerHTML='<i class="far fa-trash-alt"></i>';
          boton_eliminar.dataset.id = noticias[i]['_id'];
        boton_eliminar.addEventListener('click', confirmacion);

          celda_configuracion.appendChild(boton_editar);
         celda_configuracion.appendChild(boton_eliminar);

          }

  }
}}


function confirmacion(){
let id = this.dataset.id;
Swal.fire({
  title: 'Confirme que desea eliminar la noticia',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.value) {
        eliminar_noticia(id,centro_educativo['nombre_comercial']);
        noticias = listar_noticias();
        mostrar_noticias();
      Swal.fire({
        title:'Noticia eliminada',
        text:'La noticia fue eliminada con éxito',
        type:'success'
      }
        
      )
    }
  })
};

mostrar_noticias();



btn_agregar_noticias.addEventListener('click', function(){
  window.location.href = './registrar_noticia.html';
});
input_filtrar.addEventListener('keyup', mostrar_noticias);