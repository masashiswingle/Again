var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(express.static('../Again'));
app.use(bodyParser.json());






app.listen(5000, function (){
	console.log('listening on 5000');
})