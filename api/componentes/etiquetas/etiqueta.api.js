' use strict';
const modelo_etiquetas = require('./etiqueta.model');

module.exports.registrar_etiquetas = (req, res)=>{
    let nuevo_etiquetas= new modelo_etiquetas(
        {
            accion: req.body.accion,
            descripcion: req.body.descripcion
        }
    );
    nuevo_etiquetas.save(function(error){
        if(error){
            res.json(
                {
                    success:false,
                    msg:`No se ha podido ingresar la etiqueta deseada`
                }
            );
        }else{
            res.json(
                {
                    success:true,
                    msg:`Se ha registrado correctamente`
                }
            );
        }
    });
};
module.exports.consultar_todo=(req,res)=>{
    modelo_etiquetas.find().then(
        function(etiquetas){
            if(etiquetas.length > 0){
                res.json(
                    {
                        success:true,
                        etiquetas: etiquetas
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        etiquetas:'No se ha encontrado etiquetas'
                    }
                )
            }
        }
    )
};


module.exports.buscar_por_id = function (req, res){
    modelo_etiquetas.find({_id : req.body.id_etiquetas}).then(
        function(etiquetas){
            if(etiquetas){
                res.json({success: true, etiquetas : etiquetas});
            }else{
                res.json({success: false, etiquetas : etiquetas});
            }
        }

    );

};

module.exports.actualizar = function(req, res){
   
    modelo_etiquetas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el inmueble'});
            }else{
                res.json({success: true , msg : 'El inmueble se actualizó con éxito'});
            }
        }
    
    );
}

