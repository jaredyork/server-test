var http = require('http');
var io = require('socket.io')(http);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'localhost');

io.on('connection', function(socket) {
    socket.on('connect', function() {
        console.log('A new user connected!');
    });
});


console.log('Server running at http://localhost:8080/')