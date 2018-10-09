var server = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(8080, 'localhost');

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('A user connected!.');

    socket.on('disconnect', function() {
        console.log("A user disconnected.");
    })
});

server.listen(8080, function(err) {
    if (err) throw err
    console.log('listening on port 8080.');
});