'use strict';
const modelo_preguntas = require('./preguntas.model');

module.exports.registrar_pregunta= (req, res) =>{
    let nueva_pregunta = new modelo_preguntas(
    {
        pregunta : req.body.pregunta,
        respuesta : req.body.respuesta
    }     
  );
  nueva_pregunta.save(function(error){
    if(error){
       res.json( 
           { 
               success : false,
               msg : `No se pudo agregar la pregunta`
           }
       );  
    }else{
        res.json(
            {
                succes : true,
                msg : `Se agrego correctamente la pregunta`
            }
        ); 
        
    } 
      
  });
};
module.exports.listar = (req, res) => {
    modelo_preguntas.find().then(
        function (preguntas) {
            if (preguntas.length > 0) {
                res.json(
                    {
                        success: true,
                        preguntas: preguntas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        preguntas: 'No se encontraron articulos'
                    }
                )
            }
        }
    )
};