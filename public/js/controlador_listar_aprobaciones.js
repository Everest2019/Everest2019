'use strict';

const input_filtrar = document.querySelector('#txt_filtrar');
const tabla = document.querySelector('#tbl_aprobaciones tbody');


let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if (!usuario_loggeado || tipo_usuario != 'administrador') {
  window.location.href = `iniciar_sesion.html`;
}

let lista_instituciones = listar_instituciones_por_fecha();

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
        let celda_accion = fila.insertCell();


        celda_nombre.innerHTML = lista_instituciones[i]['nombre_comercial'];
        let fecha = new Date(lista_instituciones[i]['fecha_creacion']);
        let dia_fecha = fecha.getDate();
        fecha = fecha.toLocaleDateString();

        let fecha_hoy = new Date();
        let dia = fecha_hoy.getDate();
        let mes = fecha_hoy.getMonth() + 1;
        let anno = fecha_hoy.getFullYear();

        let diferencia = dia - dia_fecha;
        let dias_restantes = "";
        if(diferencia == 0){
          dias_restantes+= "Hoy";
        }
        else if(diferencia==1){
          dias_restantes = "Ayer";
        }
        else if(diferencia==2){
          dias_restantes = "Hace dos días";
        }
        else if(diferencia==3){
          dias_restantes = "Hace tres días";
          celda_dias.classList.add('texto_vencido');
        }
        else{
          dias_restantes = "Más de tres días";
          celda_dias.classList.add('texto_vencido');
        }

        if (dia < 10) {
          dia = '0' + dia
        } if (mes < 10) {
          mes = '0' + mes
        }

        fecha_hoy = dia + '/' + mes + '/' + anno;

        celda_fecha.innerHTML = fecha;
        celda_dias.innerHTML = dias_restantes;

        let boton_ver = document.createElement('a');
        boton_ver.innerHTML = '<i class="fas fa-eye"></i>';
        boton_ver.href = `aprobaciones.html?id_centro_educativo=${lista_instituciones[i]['_id']}`;

        celda_accion.appendChild(boton_ver);
        
      }
    };
  };
}

function aprobar_centro_aducativo() {
  let id_centro_educativo = this.dataset.id_centro_educativo;
  aprobar_centro_aducativo(id_centro_educativo);
  lista_instituciones = lista_instituciones();
  mostrar_datos();
};

mostrar_datos();
input_filtrar.addEventListener('keyup', mostrar_datos);
