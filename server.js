// server.js - Nick Frichette 9/24/2017


// Dependencies
var express 	= require('express');
var app	 	= express();
var bodyParser 	= require('body-parser');


// Basic routing
app.get('/', function(req, res) {
  res.send("Hello");
}); 


// Start
var port = 8080;
console.log("Starting server on port: " + port);
app.listen(port);
