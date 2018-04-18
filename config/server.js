var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

var objectId = require('mongodb').ObjectId;

var multiparty = require('connect-multiparty');

var expressSession = require('express-session');

var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret: 'kjakja', resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(multiparty());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;