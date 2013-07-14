var express = require('express'),
	fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var buffer = fs.readFileSync('index.html');
	var str = buffer.toString();

  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
