'use strict';
const modelo_usuario = require('./usuarios.model');

module.exports.registrar_padre_familia = (req, res) =>{
    let modelo_padre_familia = new modelo_usuario(
        {
            primer_nombre : req.body.primer_nombre,
            segundo_nombre : req.body.segundo_nombre,
            primer_apellido : req.body.primer_apellido,
            segundo_apellido : req.body.segundo_apellido,
            identificacion : req.body.identificacion,
            tipo_identificacion : req.body.identificacion,
            distrito : req.body.distrito,
            canton : req.body.canton,
            provincia : req.body.provincia,
            cantidad_hijos : req.body.cantidad_hijos,
            edad_hijos : req.body.edad_hijos,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono,
            foto_perfil: req.body.foto_perfil,
            correo: req.body.correo,
            estado: req.body.estado,
            contrasena: req.body.contrasena,
            tipo_usuario: req.body.tipo_usuario 
        }
    );
    modelo_padre_familia.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg:`No se pudo registrar el padre de familia ocurrio el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Padre de familia registrado correctamente`
                }
            );
        }
    });
}

module.exports.registrar_centro_educativo = (req, res) =>{
    let modelo_centro_educativo = new modelo_usuario(
        {
            nombre_comercial: req.body.nombre_comercial,
            cedula_juridica: req.body.cedula_juridica,
            tipo_institucion: req.body.tipo_institucion,
            modalidad: req.body.modalidad,
            tipo_colegio: req.body.tipo_colegio,
            distrito: req.body.distrito,
            canton: req.body.canton,
            provincia: req.body.provincia,
            direccion_exacta: req.body.direccion_exacta,
            ubicacion_mapa_lat: req.body.ubicacion_mapa_lat,
            ubicacion_mapa_lng: req.body.ubicacion_mapa_lng,
            ano_creacion: req.body.ano_creacion,
            referencia_historica: req.body.referencia_historica,
            informacion_general: req.body.informacion_general,
            telefono: req.body.telefono,
            fax: req.body.fax,
            pagina_web: req.body.pagina_web,
            correo: req.body.correo,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            youtube: req.body.youtube,
            logo: req.body.logo,
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            contrasena: req.body.contrasena,
            imagen_portada: req.body.imagen_portada,
            galeria1: req.body.galeria1,
            galeria2: req.body.galeria2,
            galeria3: req.body.galeria3,
            galeria4: req.body.galeria4,
            documento1: req.body.documento1,
            documento2: req.body.documento2,
            documento3: req.body.documento3,
            informacion_adicional: req.body.informacion_adicional,
            primer_nombre_encargado: req.body.primer_nombre,
            segundo_nombre_encargado: req.body.segundo_nombre,
            primer_apellido_encargado: req.body.primer_apellido,
            segundo_apellido_encargado: req.body.segundo_apellido,
            correo_encargado: req.body.correo_encargado,
            departamento_encargado: req.body.departamento,
            telefono_encargado: req.body.telefono_encargado,
            extension_encargado: req.body.extension,
            identificacion_encargado: req.body.identificacion,
            fotografia_encargado: req.body.fotografia_encargado,
            aprobado: req.body.aprobado,
            estado: req.body.estado,
            servicio_adicional: req.body.servicio_adicional,
            tipo_usuario: req.body.tipo_usuario
        }
    );
    modelo_centro_educativo.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg:`No se pudo registrar el Centro Educativo ocurrio el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Centro Educativo registrado correctamente`
                }
            );
        }
    });
}

module.exports.registrar_administrador = (req, res) =>{
    let modelo_administrador = new modelo_usuario(
        {
            primer_nombre : req.body.primer_nombre,
            segundo_nombre : req.body.segundo_nombre,
            primer_apellido : req.body.primer_apellido,
            segundo_apellido : req.body.segundo_apellido,
            identificacion : req.body.identificacion,
            telefono: req.body.telefono,
            correo: req.body.correo,
            estado: req.body.estado,
            contrasena: req.body.contrasena,
            tipo_usuario: req.body.tipo_usuario 
        }
    );
    modelo_administrador.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg:`No se pudo registrar el administrador ocurrio el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Administrador registrado correctamente`
                }
            );
        }
    });
}

//LISTAR USUARIOS

module.exports.listar_instituciones = (req,res) =>{
    modelo_usuario.find({tipo_usuario: 'centro_educativo'}).then(
        function(instituciones){
            if(instituciones.length > 0){
                res.json(
                    {
                        success: true,
                        instituciones: instituciones
                    }
                )
            }
            else{
                res.json(
                    {
                        success: false,
                        instituciones: `No se encontraron centros educativos`
                    }
                )
            }
        }
    )
};


//BUSCAR USUARIOS

module.exports.buscar_centro_educativo = function(req, res){
    modelo_usuario.findOne({_id : req.body.id}).then(
        function(centro_educativo){
            if(centro_educativo){
                res.send(centro_educativo);
            }else{
                res.send('No se encontró el Centro Educativo');
            }
            
        }
    )
};

module.exports.buscar_padre_familia = function(req, res){
    modelo_usuario.findOne({_id : req.body.id}).then(
        function(padre_familia){
            if(padre_familia){
                res.send(padre_familia);
            }else{
                res.send('No se encontró el Padre Familia');
            }
        }
    )
};

/*Inicio de Sesión*/ 
module.exports.validar = function (req, res){
    modelo_usuario.findOne({correo : req.body.correo}).then(
        function(usuario){
            if(usuario){
                if(usuario.contrasena == req.body.contrasena){
                    res.json(
                        {
                            success:true,
                            usuario : usuario,
                            correo : usuario.correo,
                            id : usuario._id,
                            tipo_usuario : usuario.tipo_usuario
                        }
                    );
                }else{
                    res.json({
                        success:false
                    })
                }
            }else{
                res.json(
                    {
                        success:false,
                        msg : 'El usuario no existe'
                    }
                );
            }
        }
    )
};
