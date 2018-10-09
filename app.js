var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", function(req, res) {
    response.send(dream);
});

var listener = app.listen(8080, function() {
    console.log("Your app is listening on port " + listener.address().port);
});

