

const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

app.use(cors());





io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    console.log(`Mensaje recibido de ${data.username}: ${data.message}`);
    io.emit('chat_message', data); // Reenvía el mensaje a todos los clientes
  });
});

server.listen(8083);