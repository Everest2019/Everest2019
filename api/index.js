'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
  dburl = 'mongodb://everest:everest@everest-shard-00-00-iywno.mongodb.net:27017,everest-shard-00-01-iywno.mongodb.net:27017,everest-shard-00-02-iywno.mongodb.net:27017/test?ssl=true&replicaSet=Everest-shard-0&authSource=admin&retryWrites=true',
  port = 4000;
/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error, donde posiblemente el url este causando el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: con la base de datos'));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
/*Con respecto al contenido de los mensajes
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
/*
Con respecto a los encabezados de los mensajes que sean enviados
*/
app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const preferencia = require('./componentes/preferencia/preferencia_route');
app.use('/api', preferencia);


// const padre_familia = require('./componentes/padre_familia/padre_familia.route');

// app.use('/api', padre_familia);
const actividades= require('./componentes/actividades/actividades.route');
app.use('/api',actividades);

const usuario = require('./componentes/usuarios/usuarios.route');
app.use('/api', usuario);

const contrasena = require ('./componentes/contrasena/contrasena_route');
app.use('/api', contrasena);


const etiquetas = require('./componentes/etiquetas/etiqueta.route');
app.use('/api', etiquetas);

const lista_utiles = require('./componentes/lista_ustiles/utiles.router');
app.use('/api',lista_utiles);
// Se guarda todo lo que se ha realizado
//Se envie toda la informacion que hayamos creado hacia la app
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};
