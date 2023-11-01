const http = require('http');
const express = require('express');
const cors = require('cors'); // Importa el módulo cors

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server);

// Habilita el middleware de cors y configura Access-Control-Allow-Origin: *
app.use(cors({
  origin: '*',
}));

io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    io.emit('chat_message', data);
  });
});

server.listen(8084, () => {
  console.log('Servidor Socket.io escuchando en el puerto 8084');
});