const { io } = require('../server'); // cogemos la variable io del archivo server.js

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    // para saber cuando un cliente se desconecta de la aplicacion
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar al cliente, listener, la clave esta en el nombre del listener enviarMensaje
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Con broadcast se emite el mensaje a todos los clientes
        client.broadcast.emit('enviarMensaje', data);

        /*  if (message.usuario) {
             callback({
                 resp: 'Todo salio bien'
             }); // esta es la funcion callback definida en el cliente
         } else {
             callback({
                 resp: 'Todo salio mal'
             });
         } */


    });
});