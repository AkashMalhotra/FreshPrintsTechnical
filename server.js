// modules =================================================
var express        = require('express');
var app            = express();
var mysql      = require('mysql');

var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'address_book'
});
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port



app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); /

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app