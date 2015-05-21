var express = require("express"),
    app = express(),
    http = require('http').Server(app)
    io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log(socket);
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function() {
        console.log('Cool cat has bailed');
    });
});

http.listen(3000, function(){
    console.log('listening on localhost:3000');
});