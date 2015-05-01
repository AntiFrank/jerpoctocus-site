var express = require('express');
var path = require('path');

var app = express();

// mine
var port = process.env.PORT || CONFIG.port;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
	res.render('index.html');
})

var server = app.listen(port, function () {
	console.log('Running on port 3000')
})