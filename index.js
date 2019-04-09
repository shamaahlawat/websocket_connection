var express = require('express');
var socket = require('socket.io')
//App setup

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to request on port 4000')
})

//static files
app.use(express.static('public'))

//socket setup

var io = socket(server); // sockets on server side

io.on('connection' , function(socket){ //when connect is detected then callback function which takes info about my 
    console.log('made socket connection',socket.id) //everytime we refresh all unique socket connection b/w client and server
})