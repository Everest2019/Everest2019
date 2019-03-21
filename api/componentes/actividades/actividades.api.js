'use strict';
const modelo_actividades = require('./actividades.model');

module.exports.registrar = (req, res) =>{
    let nueva_actividad = new modelo_actividades(
    {
        fecha : req.body.fecha,
        titulo : req.body.titulo,
        descripcion : req.body.descripcion
    }    
  );
  nueva_actividad.save(function(error){
    if(error){
       res.json( 
           {
               success : false,
               msg : `No se pudo registrar la actividad`
           }
       ); 
    }else{
        res.json(
            {
                succes : true,
                msg : `Se registro correctamente la actividad`
            }
        ); 
        
    } 
      
  });
}

module.exports.listar_todos = (req, res) =>{
    modelo_actividades.find().then(
        function(actividades){
            if (actividades.length > 0){
                res.json(
                    {
                        sucess:true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        succes:false,
                        actividades:'No se encontraron actividades'
                    }
                )
            }
        }
    )
}