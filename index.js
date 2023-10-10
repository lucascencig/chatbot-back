const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    io.emit('chat_message', data);
  })
});

server.listen(8084);