

let _id = get_param('id_noticia');

let noticia = buscar_noticia(_id);







let mostrar_datos = ()=>{

};
if(noticia){
  mostrar_datos();
};

let obtener_datos = ()=>{
  let titulo= input_titulo.value;
  let descripcion = input_descripcion.value;
  let fecha = input_fecha.value;
  actualizar_noticia(titulo, descripcion, fecha, _id);
/*  Swal.fire({
        title: 'Está seguro que desea actualizar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_noticia(titulo, descripcion, fecha, _id);
        }
      })*/


};
let validar=()=>{
  let titulo= input_titulo.value;
  let descripcion = input_descripcion.value;
  let fecha = input_fecha.value;
// ------validar--------------
  if(titulo == ""){
    error = true;
    input_titulo.classList.add('');
    input_titulo.classList.remove('');
  }else{

  }

  if(descripcion == ""){
      error = true;
      input_descripcion.classList.add('');
      input_descripcion.classList.remove('');
  }else{

  }

  if(fecha == ""){
      error = true;
      input_fecha.classList.add('');
      input_fecha.classList.remove('');
  }else{

  }


};

let limpiar_form = ()=>{
  input_titulo.value ='';
  input_descripcion.value ='';
  input_fecha.value = '';

};
boton_guardar.addEventListener('click',obtener_datos());
