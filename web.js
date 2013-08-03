var express = require('express');
var app = express();
var fs = require('fs');
var fileName = "index.html";
var content =fs.readFileSync(fileName);
var buf = new Buffer(content, "utf-8");
var string = buf.toString("utf-8", 0, 28);
app.use(express.logger());
app.use(express.static(__dirname + '/public');

app.get('/', function(request, response) {


  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
