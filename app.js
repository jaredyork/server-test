var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 8080;
server.listen(port);

// File System API
var fs = require('fs');

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

    socket.on('client-connect', function() {
        console.log("Browser window loaded for client.");

        var input = fs.createReadStream('keywords.txt');
        readKeywordFile(socket, input, printKeywordData);
    });
});

function readKeywordFile(socket, input, printKeywordData) {
    var remaining = '';

    input.on('data', function(data) {
        remaining += data;

        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            printKeywordData(socket, line);
            index = remaining.indexOf('\n');
        }
    });

    input.on('end', function() {
        if (remaining.length > 0) {
            printKeywordData(socket, remaining);
        }
    });
}

function printKeywordData(socket, data) {
    console.log('Line: ' + data);
    socket.emit('send-keywords', data)
}
