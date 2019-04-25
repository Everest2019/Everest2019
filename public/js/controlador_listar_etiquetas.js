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
            let celda_configuaracion = fila.insertCell();

            //creacion del boton de editar
            //let boton = document.createElement('button');
            let boton_asignar = document.createElement('input');
            boton_asignar.type = 'checkbox';
            boton_asignar.value= etiquetas[i]['accion'];// debo sacar el id (en mongo )de esa etiqueta

            boton_asignar.name = etiquetas[i]['descripcion'];

            celda_configuaracion.appendChild(boton_asignar);


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

input_filtro.addEventListener('keyup', mostrar_datos);
boton_agregar_etiquetas.addEventListener('click', obtener_datos);