var express = require('express');
var socket = require('socket.io')
//App setup

var app = express();
var server = app.listen(5000, function(){
    console.log('listening to request on port 5000')
})

//static files
app.use(express.static('public'))

//socket setup

var io = socket(server); // sockets on server side

io.on('connection' , function(socket){ //when connect is detected then callback function which takes info about my 
    console.log('made socket connection',socket.id) //everytime we refresh all unique socket connection b/w client and server

    socket.on('chat',function(data){ 
       io.sockets.emit('chat', data);
    })

    //listner
    socket.on('typing',function(data){ 
        socket.broadcast.emit('typing', data); //broadcasting this msg to every over sinlge socket or client
     })
});