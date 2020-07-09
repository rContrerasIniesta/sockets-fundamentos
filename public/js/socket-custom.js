 // Mismo objeto io definido en server.js
 var socket = io();

 // on para escuchar del servidor
 socket.on('connect', function() {
     console.log('Concetado al servidor');
 });

 // Se ejecuta cuando perdemos la conexion con el servidor
 socket.on('disconnect', function() {
     console.log('Servidor desconectado');
 });

 // Enviar informacion al servidor
 // El callback es para obtener una respuesta del servidor al mensaje
 socket.emit('enviarMensaje', {
     usuario: 'Rafa',
     mensaje: 'Hola mundo'
 }, function(resp) {
     console.log('Respuesta server', resp);
 });

 // escuchamos informacion del servidor por medio del listener enviarMensaje
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor: ', mensaje);
 });