

const http = require('http');
const express = require('express');
const cors = require('cors'); // Agrega la importación de cors

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*' // Esto permitirá cualquier origen, pero en producción, debes configurar esto adecuadamente
  }
});

app.use(cors()); // Habilita el middleware de cors





io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    console.log(`Mensaje recibido de ${data.username}: ${data.message}`);

    // Asegúrate de que data contenga el nombre de usuario
    // const messageData = {
    //   senderName: data.senderName,
    //   message: data.message
    // };

    io.emit('chat_message', data); // Reenvía el mensaje a todos los clientes
  });
});

server.listen(8083);