const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const db = require('./src/database/db.js');
const clientRoutes = require('./src/routes/routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    io.emit('chat_message', data);
  });
});

app.use('/clients', clientRoutes);

const PORT = 8000; // Cambia el puerto según tus necesidades

server.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT}`);
});