var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');
var userController = require('./controllers/user.controller');

var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, function () {});

app.get('/', userController.index);
app.get('/getDetails', userController.getDetails);
app.use('/user', userRoute);
