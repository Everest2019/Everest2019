'use strict';

const input_filtrar = document.querySelector('#txt_filtrar');
const tabla = document.querySelector('#tbl_aprobaciones tbody');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario != 'administrador') {
  window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones();

function mostrar_datos() {

  let filtro = input_filtrar.value;

  tabla.innerHTML = '';


  for (let i = 0; i < lista_instituciones.length; i++) {

    if (lista_instituciones[i]['aprobado'] == false) {
      if (lista_instituciones[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        let celda_nombre = fila.insertCell();
        let celda_fecha = fila.insertCell();
        let celda_dias = fila.insertCell();
        let celda_configuracion = fila.insertCell();


        celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
        let fecha = new Date(lista_instituciones[i]['fecha_creacion']);
        fecha = fecha.toLocaleDateString();

        let fecha_hoy = new Date();
        let dia = fecha_hoy.getDate();
        let mes = fecha_hoy.getMonth() + 1;
        let anno = fecha_hoy.getFullYear();

        if (dia < 10) {
          dia = '0' + dia
        } if (mes < 10) {
          mes = '0' + mes
        }

        fecha_hoy = dia + '/' + mes + '/' + anno;

        celda_fecha.innerHTML = fecha;
        celda_dias.innerHTML = fecha_hoy;


        if (lista_instituciones[i]['aprobado'] == false) {
          let boton_deshabilitar = document.createElement('a');
          boton_deshabilitar.href = '#';
          boton_deshabilitar.innerHTML = '<i class="fas fa-eye"></i>';
          boton_deshabilitar.classList.add('botonEstado');
          boton_deshabilitar.classList.add('btn_habilitar');
          boton_deshabilitar.dataset.id_centro_educativo = lista_instituciones[i]['_id'];
          boton_deshabilitar.addEventListener('click', aprobar_centro_aducativo);
          celda_configuracion.appendChild(boton_deshabilitar);
        } else {
          let boton_deshabilitar = document.createElement('a');
          boton_deshabilitar.href = '#';
          boton_deshabilitar.innerHTML = '<i class="far fa-eye-slash"></i>';
          boton_deshabilitar.classList.add('botonEstado');
          boton_deshabilitar.classList.add('btnDeshabilitar');
          boton_deshabilitar.dataset.id_centro_educativo = lista_instituciones[i]['_id'];
          boton_deshabilitar.addEventListener('click', deshabilitar_centro_educativo);
          celda_configuracion.appendChild(boton_deshabilitar);
        }
      }
    };
  };
}

//function calcular(){
	//var fechaini = new Date(document.getElementById('fecha_creacion').value);
	//var fechafin = new Date(document.getElementById('fecha_hoy').value);
	//var diasdif= fechafin.getTime()-fechaini.getTime();
	//var contdias = Math.round(diasdif/(1000*60*60*24));
	//alert(contdias);
//}

function deshabilitar_centro_educativo() {
  let id_centro_educativo = this.dataset.id_centro_educativo;
  deshabilitar_centro_educativo(id_centro_educativo);
  lista_instituciones = listar_instituciones();
  mostrar_datos();
};
function aprobar_centro_aducativo() {
  let id_centro_educativo = this.dataset.id_centro_educativo;
  aprobar_centro_aducativo(id_centro_educativo);
  lista_instituciones = lista_instituciones();
  mostrar_datos();
};

mostrar_datos();
input_filtrar.addEventListener('keyup', mostrar_datos);
