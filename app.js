var server = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(8080, 'localhost');

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('connect', function() {
        console.log('A new user connected!');
    });

    socket.on('disconnect', function() {
        console.log("A user disconnected.");
    })
});

console.log('Server running at http://localhost:8080/')