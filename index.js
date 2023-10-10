const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
  cors: { origin: 'https://render-chat-back.onrender.com/' }
});

io.on('connection', (socket) => {
  console.log('Conectado al servidor');

  socket.on('chat_message', (data) => {
    io.emit('chat_message', data);
  })
});

server.listen('https://render-chat-back.onrender.com/');