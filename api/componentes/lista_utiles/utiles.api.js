'use strict';
const modelo_utiles = require('./utiles.model');

module.exports.registrar_utiles = (req,res)=>{
    let nuevo_registrar = new modelo_utiles(
        {
            articulo: req.body.articulo,
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion,
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



module.exports.buscar_por_id = function (req, res) {
    modelo_utiles.find({ _id: req.body.id_lista_utiles }).then(
        function (lista_utiles) {
            if (lista_utiles) {
                res.json({ success: true, lista_utiles: lista_utiles });
            } else {
                res.json({ success: false, lista_utiles: lista_utiles });
            }
        }
    );
};

module.exports.actualizar = function (req, res) {
    modelo_utiles.findByIdAndUpdate(req.body.id, {
        $set: req.body
    },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se ha podido actualizar el articulo de la lista' });
            } else {
                res.json({ success: true, msg: 'El articulo de la lista se ha actualizado con éxito' });
            }
        }
    );
}

module.exports.borrar = (req, res) => {
    modelo_utiles.findByIdAndDelete(req.body.id_lista_utiles,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se ha podido eliminar el articulo de la lista' });
            } else {
                res.json({
                    success: true, meg: 'El articulo de la lista se ha eliminado con exito' });
            }
        }
    )
}