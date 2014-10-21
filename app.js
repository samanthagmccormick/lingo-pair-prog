var express = require('express');
var bodyParser = require('body-parser');

// Require mongoose
var mongoose = require('mongoose');

var indexController = require('./controllers/index.js');

// Connect to mongodb database
mongoose.connect('mongodb://localhost/lingo');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Page renderings
app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get('/quiz', indexController.quiz);
app.get('/progress', indexController.progress);
app.get('/sorry', indexController.sorry);

// Form submissions
app.post('/translateIt', indexController.translateIt);


var server = app.listen(8923, function() {
	console.log('Express server listening on port ' + server.address().port);
});
