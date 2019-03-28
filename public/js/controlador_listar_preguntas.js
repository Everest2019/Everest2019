'use stric';

const lista_preguntas = document.querySelector('#lista_preguntas');

let mostrar_datos = () =>{
    let preguntas = listar();

    for(let i = 1; i<=preguntas.length; i++){
        let pregunta_frecuente = document.createElement('div');
        pregunta_frecuente.classList.add('pregunta');

        let nombre_pregunta = document.createElement('div');
        nombre_pregunta.classList.add('nombre_pregunta');

        let texto_pregunta = document.createElement('p');
        texto_pregunta.innerHTML = preguntas[i]['pregunta'];

        nombre_pregunta.appendChild(texto_pregunta);

        //Respuesta
        let respuesta_pregunta = document.createElement('div');
        respuesta_pregunta.classList.add('respuesta_pregunta');

        let texto_respuesta = document.createElement('p');
        texto_respuesta.innerHTML = preguntas[i]['respuesta'];

        respuesta_pregunta.appendChild(texto_respuesta);

        pregunta_frecuente.appendChild(nombre_pregunta);
        pregunta_frecuente.appendChild(respuesta_pregunta);

        lista_preguntas.appendChild(pregunta_frecuente);
    }
}
mostrar_datos();
