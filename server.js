"use strict";

var express = require("express");
var app = express();

app.set("view engine", 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('pad');
});

app.get('/(:id)', function(req, res) {
  res.render('pad');
});


var sharejs = require('share');
require('redis');

// options for sharejs 
var options = {
  db: {type: 'redis'},
};

// attach the express server to sharejs
sharejs.server.attach(app, options);

var port = process.env.PORT || 8000;

app.listen(port, function(req, res) {
	console.log(port);
});