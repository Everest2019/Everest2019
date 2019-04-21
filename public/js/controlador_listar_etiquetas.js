'use strict';


let etiquetas = listar_etiquetas();

//----------------------------------segun tipo usuario
let usuario = localStorage.getItem('tipo_usuario');

if (usuario == 'centro_educativo'){

  let boton_agregar_etiquetas = document.querySelector('#btn_agregar');
  const tabla = document.querySelector('#tbl_etiquetas tbody');
  const input_filtro = document.querySelector('#txt_filtar');

  let usuarios = [];

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

}else{
  if(usuario == 'padre_familia'){
    const lista_instituciones = document.querySelector('#lista_instituciones');
    const select_criterios = document.querySelector('#select_criterios');
    const opt_todos = document.querySelector('#listar_todos');
    const opt_escuelas = document.querySelector('#listar_escuelas');
    const input_filtrar = document.querySelector('#txt_buscar_centro_educativo');


    let filtrar_criterios = () =>{
        switch(select_criterios.value){
            case 'Todos':
                mostrar_datos();
            break;
            case 'Colegios':
                mostrar_datos_colegios();
            break;
            case 'Escuelas':
                mostrar_datos_escuelas();
            break;
        }
    };

    let mostrar_datos = () => {
        let filtro = input_filtrar.value;
        let instituciones = listar_instituciones();

        document.getElementById('lista_instituciones').innerHTML ='';
        for(let i=0; i< instituciones.length; i++){
            if(instituciones[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())){
            document.getElementById('lista_instituciones').innerHTML +=


            '<div class="contenedor_institucion">'+
                    '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                    '<div class="contenedor_informacion">'+

                        '<div class="contenedor_nombre_centro_educativo">'+
                            '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                       ' </div>'+

                        '<div class="contenedor_clasificacion_centro_educativo">'+

                            '<div class="contenedor_tipo">'+
                                '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                            '</div>' +

                            '<div class="contenedor_division">'+
                                '<p>/</p>'+
                            '</div>'+

                            '<div class="contenedor_sistema">'+
                                '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_telefono_centro_educativo">'+
                            '<p>'+ instituciones[i]['telefono'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_ubicacion_centro_educativo">'+

                            '<div class="contenedor_provincia">'+
                                '<p>' + instituciones[i]['provincia'] + '</p>'+
                            '</div>'+

                            '<div class="contenedor_canton">'+
                                '<p>'+ instituciones[i]['canton'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_web_centro_educativo">'+
                            '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                        '</div>'+
                        '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                             //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                             ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+

                        '</div>'+

                    '</div>'+
                '</div>'

            }
        };



    };

    let mostrar_datos_colegios = () => {
        let instituciones = listar_instituciones();
        document.getElementById('lista_instituciones').innerHTML ='';
        for(let i=0; i< instituciones.length; i++){
            if (instituciones[i]['tipo_institucion'].includes('Colegio') || instituciones[i]['tipo_institucion'].includes('Ambos')) {

            document.getElementById('lista_instituciones').innerHTML +=


            '<div class="contenedor_institucion">'+
                    '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                    '<div class="contenedor_informacion">'+

                        '<div class="contenedor_nombre_centro_educativo">'+
                            '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                       ' </div>'+

                        '<div class="contenedor_clasificacion_centro_educativo">'+

                            '<div class="contenedor_tipo">'+
                                '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                            '</div>' +

                            '<div class="contenedor_division">'+
                                '<p>/</p>'+
                            '</div>'+

                            '<div class="contenedor_sistema">'+
                                '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_telefono_centro_educativo">'+
                            '<p>'+ instituciones[i]['telefono'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_ubicacion_centro_educativo">'+

                            '<div class="contenedor_provincia">'+
                                '<p>' + instituciones[i]['provincia'] + '</p>'+
                            '</div>'+

                            '<div class="contenedor_canton">'+
                                '<p>'+ instituciones[i]['canton'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_web_centro_educativo">'+
                            '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                        '</div>'+
                        '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                             //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                             ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+

                        '</div>'+

                    '</div>'+
                '</div>'
            };
        };
    };

    let mostrar_datos_escuelas = (param) => {
      let instituciones = listar_instituciones();

        document.getElementById('lista_instituciones').innerHTML ='';
        for(let i=0; i< instituciones.length; i++){
            if (instituciones[i]['tipo_institucion'].includes('Escuela') || instituciones[i]['tipo_institucion'].includes('Ambos')) {

            document.getElementById('lista_instituciones').innerHTML +=


            '<div class="contenedor_institucion">'+
                    '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                    '<div class="contenedor_informacion">'+

                        '<div class="contenedor_nombre_centro_educativo">'+
                            '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                       ' </div>'+

                        '<div class="contenedor_clasificacion_centro_educativo">'+

                            '<div class="contenedor_tipo">'+
                                '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                            '</div>' +

                            '<div class="contenedor_division">'+
                                '<p>/</p>'+
                            '</div>'+

                            '<div class="contenedor_sistema">'+
                                '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_telefono_centro_educativo">'+
                            '<p>'+ instituciones[i]['telefono'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_ubicacion_centro_educativo">'+

                            '<div class="contenedor_provincia">'+
                                '<p>' + instituciones[i]['provincia'] + '</p>'+
                            '</div>'+

                            '<div class="contenedor_canton">'+
                                '<p>'+ instituciones[i]['canton'] + '</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="contenedor_web_centro_educativo">'+
                            '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                        '</div>'+
                        '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                             //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                             ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+

                        '</div>'+

                    '</div>'+
                '</div>'
            };
        };
    };

    mostrar_datos();

    let buscar_por_etiquetas= ()=>{
      let filtro = document.querySelector('#txt_buscar_centro_educativo');
      let instituciones = listar_instituciones();




      document.getElementById('lista_instituciones').innerHTML ='';

      for(let i=0;i<instituciones.length;i++){
      if(instituciones[i]['etiquetas']){
      document.getElementById('lista_instituciones').innerHTML +=


      '<div class="contenedor_institucion">'+
              '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

              '<div class="contenedor_informacion">'+

                  '<div class="contenedor_nombre_centro_educativo">'+
                      '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                 ' </div>'+

                  '<div class="contenedor_clasificacion_centro_educativo">'+

                      '<div class="contenedor_tipo">'+
                          '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                      '</div>' +

                      '<div class="contenedor_division">'+
                          '<p>/</p>'+
                      '</div>'+

                      '<div class="contenedor_sistema">'+
                          '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                      '</div>'+
                  '</div>'+

                  '<div class="contenedor_telefono_centro_educativo">'+
                      '<p>'+ instituciones[i]['telefono'] + '</p>'+
                  '</div>'+

                  '<div class="contenedor_ubicacion_centro_educativo">'+

                      '<div class="contenedor_provincia">'+
                          '<p>' + instituciones[i]['provincia'] + '</p>'+
                      '</div>'+

                      '<div class="contenedor_canton">'+
                          '<p>'+ instituciones[i]['canton'] + '</p>'+
                      '</div>'+
                  '</div>'+

                  '<div class="contenedor_web_centro_educativo">'+
                      '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                  '</div>'+
                  '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                       //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                       ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+

                  '</div>'+

              '</div>'+
          '</div>'

      }
    }

    };

    function visualizar_centro_educativo(pid_centro_educativo){

        localStorage.setItem('centro_educativo', pid_centro_educativo);
        window.location.href = 'perfil_centro_educativo_general.html';
    };

    input_filtrar.addEventListener('keyup', mostrar_datos);


    let select_etiquetas = document.querySelector('#txt_buscar_centro_educativo');

    let opciones_etiquetas = document.querySelectorAll('#txt_buscar_centro_educativo option');

    for(let i=0;i<opciones_etiquetas.length;i++){
      opciones_etiquetas[i].value = etiquetas[i]['_id'];
      opciones_etiquetas[i].textContent = etiquetas[i]['accion'];
    }

let filtrar_etiquetas = ()=>{
  let instituciones = listar_instituciones();
  let filtro = select_etiquetas.value;
console.log(filtro);
  document.getElementById('lista_instituciones').innerHTML ='';

  for(let i=0;i<instituciones.length;i++){
    let mis_etiquetas = instituciones[i]['etiquetas'];
  if(mis_etiquetas){
    //console.log(mis_etiquetas[i]['accion']);
  document.getElementById('lista_instituciones').innerHTML +=


  '<div class="contenedor_institucion">'+
          '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

          '<div class="contenedor_informacion">'+

              '<div class="contenedor_nombre_centro_educativo">'+
                  '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
             ' </div>'+

              '<div class="contenedor_clasificacion_centro_educativo">'+

                  '<div class="contenedor_tipo">'+
                      '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                  '</div>' +

                  '<div class="contenedor_division">'+
                      '<p>/</p>'+
                  '</div>'+

                  '<div class="contenedor_sistema">'+
                      '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                  '</div>'+
              '</div>'+

              '<div class="contenedor_telefono_centro_educativo">'+
                  '<p>'+ instituciones[i]['telefono'] + '</p>'+
              '</div>'+

              '<div class="contenedor_ubicacion_centro_educativo">'+

                  '<div class="contenedor_provincia">'+
                      '<p>' + instituciones[i]['provincia'] + '</p>'+
                  '</div>'+

                  '<div class="contenedor_canton">'+
                      '<p>'+ instituciones[i]['canton'] + '</p>'+
                  '</div>'+
              '</div>'+

              '<div class="contenedor_web_centro_educativo">'+
                  '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
              '</div>'+
              '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                   //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                   ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+

              '</div>'+

          '</div>'+
      '</div>'

  }
}


}
select_etiquetas.onChange = filtrar_etiquetas();
//end funcion filtrar mediante etiquetas ----------------------




  }
}

//-----------------------------------------------
