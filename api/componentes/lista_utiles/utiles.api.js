'use strict';
const modelo_utiles = require('./utiles.model');

module.exports.registrar_utiles = (req,res)=>{
    let nuevo_registrar = new modelo_utiles(
        {
            articulo: req.body.articulo,
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion//,
            //tipo_usuario: req.body.tipo_usuario,
           // id_centro_educativo: req.body.id_centro_educativo
        }
    ); 
    nuevo_registrar.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la lista deseada, ha ocurrido el error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success:true,
                    msg: `Se ha registrado correctamente su lista`
                }
            );
        }
    });
};
module.exports.listar_utiles=(req,res)=>{
    modelo_utiles.find().then(
        function(utiles){
            console.log(utiles.length);
            if(utiles.length > 0){
                
                res.json(
                    {
                        success:true,
                        utiles:utiles
                    }
                )
            }else{
                res.json(
                    {
                        success:false,
                        utiles:`No hay listas registradas`
                    }
                )
            }
        }
    )
};