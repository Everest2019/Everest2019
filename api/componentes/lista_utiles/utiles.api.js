'use strict';
const modelo_utiles = require('./utiles.model');

module.exports.registrar_utiles = (req,res)=>{
    let nuevo_registrar = new modelo_utiles(
        {
            articulo: req.body.articulo,
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion,
            articulo_1: req.body.articulo_1,
            cantidad_1: req.body.cantidad_1,
            descripcion_1: req.body.descripcion_1,
            
            articulo_2: req.body.articulo_2,
            cantidad_2: req.body.cantidad_2,
            descripcion_2: req.body.descripcion_2,
            //tipo_usuario: req.body.tipo_usuario,
           // id_centro_educativo: req.body.id_centro_educativo

            articulo_3: req.body.articulo_3,
            cantidad_3: req.body.cantidad_3,
            descripcion_3: req.body.descripcion_3,

            articulo_4: req.body.articulo_4,
            cantidad_4: req.body.cantidad_4,
            descripcion_4: req.body.descripcion_4,

            articulo_5: req.body.articulo_5,
            cantidad_5: req.body.cantidad_5,
            descripcion_5: req.body.descripcion_5,

            articulo_6: req.body.articulo_6,
            cantidad_6: req.body.cantidad_6,
            descripcion_6: req.body.descripcion_6,

            articulo_7: req.body.articulo_7,
            cantidad_7: req.body.cantidad_7,
            descripcion_7: req.body.descripcion_7,

            articulo_8: req.body.articulo_8,
            cantidad_8: req.body.cantidad_8,
            descripcion_8: req.body.descripcion_8,

            articulo_9: req.body.articulo_9,
            cantidad_9: req.body.cantidad_9,
            descripcion_9: req.body.descripcion_9,

            articulo_10: req.body.articulo_10,
            cantidad_10: req.body.cantidad_10,
            descripcion_10: req.body.descripcion_10,

            articulo_11: req.body.articulo_11,
            cantidad_11: req.body.cantidad_11,
            descripcion_11: req.body.descripcion_11,

            articulo_12: req.body.articulo_12,
            cantidad_12: req.body.cantidad_12,
            descripcion_12: req.body.descripcion_12,

            articulo_13: req.body.articulo_13,
            cantidad_13: req.body.cantidad_13,
            descripcion_13: req.body.descripcion_13,

            articulo_14: req.body.articulo_14,
            cantidad_14: req.body.cantidad_14,
            descripcion_14: req.body.descripcion_14
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