var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Home',
		name: 'world'
	});
});

app.get('/users/', function (req, res) {
	res.render('index', {
		title: 'Users',
		name: 'anonymous'
	});
});

app.get('/users/:name', function (req, res) {
	var param = req.params.name.toString();
	res.render('index', {
		title: 'Users',
		name: param[0].toUpperCase() + param.slice(1)
	});
});

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});

var server = app.listen(process.env.PORT || 3000, function () {
	console.log('App listening at port ' + server.address().port);
});