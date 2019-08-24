const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(4000, () => console.log('ChatApp is listening on port 4000'));

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function (socket) {
  console.log('made socket connection');

  socket.on('chat', function(data){
    io.sockets.emit('chat', data)
  })
})