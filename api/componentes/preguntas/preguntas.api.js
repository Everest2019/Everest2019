'use strict';
const modelo_preguntas = require('./preguntas.model');

module.exports.agregar = (req, res) =>{
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