'use strict';
const modelo_lista_utiles = require('./utiles.model');

module.exports.registrar_utiles = (req, res) => {
    let nuevo_utiles = new modelo_lista_utiles(
        {
            articulo:req.body.articulo,
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion
        }
    );

    nuevo_utiles.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg:`No se ha podido crea la lista`
                }
            );
        }else{
            res.json(
                {
                    success: true,
                    msg:`Se ha registrado correctamente la lista.`
                }
            );
        }
    })
};

module.exports.listar_todo = (req, res) =>{
    modelo_lista_utiles.find().then(
        function(lista_utiles){
            if(lista_utiles.length >0){
                res.json(
                    {
                        success:true,
                        lista_utiles:lista_utiles
                    }
                )
            }else{
                res.json(
                    {
                        success:false,
                        lista_utiles:`No hay registro de las listas de utiles`
                    }
                )
            }
        }
    )
};