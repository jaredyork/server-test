var app = require("express");
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on('connection', function(socket) {
    console.log("A user connected!");

    socket.on("client-connect", function() {
        console.log("A client connected, woohoo!");
    });
});

http.listen(8080, function() {
    console.log('Listening on *:8080');
});
