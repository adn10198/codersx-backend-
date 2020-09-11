var express = require('express');
var app = express();

var userRoute = require('./routes/user.route')

var port = 3000;

app.listen(port, function () {});

app.get('/', function (req, res) {
	res.send('helooo');
});
app.get('/user', function (req, res) {
	res.send('hello usser');
});

app.use('/user', userRoute)