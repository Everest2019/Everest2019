let boton_agregar_etiquetas = document.querySelector('#btn_agregar');
const tabla = document.querySelector('#tbl_etiquetas tbody');
const input_filtro = document.querySelector('#txt_filtar');

let usuarios = [];
let etiquetas = listar_etiquetas();
let mostrar_datos = () => {
    let filtro = input_filtro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < etiquetas.length; i++) {
        if (etiquetas[i]['accion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = etiquetas[i]['accion'];
            fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
            // se crea una nueva celda para el boton de editar
            let celda_configuracion = fila.insertCell();

            //creacion del boton de editar
            let boton_editar = document.createElement('a');
            boton_editar.href = `actualizar_etiquetas.html?id_etiquetas=${etiquetas[i]['_id']}`;
            boton_editar.classList.add('far', 'fa-edit');
            celda_configuracion.appendChild(boton_editar);
            celda_configuracion.classList.add('th_configuracion');
            // se crea una celda para el boton eliminar

            //se crea el boton eliminar
            
            let boton_eliminar = document.createElement('a');
            boton_eliminar.classList.add('far', 'fa-trash-alt');
            boton_eliminar.href = "#";
            boton_eliminar.dataset.id_etiqueta = etiquetas[i]
            ['_id'];
            boton_eliminar.addEventListener('click', confirmar_borrado);

            celda_configuracion.appendChild(boton_eliminar);


        }
    };
};
mostrar_datos();

let obtener_datos = ()=>{
  let centro_educativo = localStorage.getItem('id_usuario');
  const mis_etiquetas = document.querySelectorAll('input[type=checkbox]:checked');

  for(let i=0;i<mis_etiquetas.length;i++){
   console.log(mis_etiquetas[i].value);
    asignar_etiquetas(mis_etiquetas[i]['value'], mis_etiquetas[i]['name'], centro_educativo);


  }

};

function confirmar_borrado() {
  let id = this.dataset.id_etiqueta;
  swal.fire({
      title: '¿Está seguro de eliminar?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro'
  }).then((result) => {
      if (result.value) {
          borrar_etiquetas(id);
          etiquetas = listar_etiquetas();
          mostrar_datos();
          
      }
  })
};



input_filtro.addEventListener('keyup', mostrar_datos);
boton_agregar_etiquetas.addEventListener('click', function(){
  window.location.href = 'registrar_etiquetas.html';
});