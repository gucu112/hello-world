var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello world');
});

var server = app.listen(process.env.PORT, function () {
	console.log('App listening at port ' + server.address().port);
});