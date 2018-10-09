var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 8080;
server.listen(port);

console.log("Server started up...");

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", function(req, res) {
    response.send(dream);
});

io.sockets.on('connection', function(socket) {
    console.log("A user connected!");

    socket.on('disconnect', function() {
        console.log("A user disconnected.");
    });
});