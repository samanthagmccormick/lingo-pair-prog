var BeGlobal = require('node-beglobal');
var User = require('../models/user.js');
var randomWords = require('random-words');

var wordList = randomWords(10);

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'Wc1cSBGej%2FJyOYHY79PBIw%3D%3D'
});


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translate: function(req, res) {
		res.render('translate');
	},
	quiz: function(req, res) {

		// Create a new quiz with 10 random questions
		// This will also generate an ID for each of your quizzes
		var newQuiz = new User({
			language: 'eng',
			words: randomWords(10),
			completed: false
		});

		// Save your new quiz to the database
		newQuiz.save(function(err, result){
			res.render('quiz', {
				newQuiz: newQuiz
			});
		});


	},
	progress: function(req, res) {
		res.render('progress');
	},
	sorry: function(req, res) {
		res.render('sorry');
	},
	translateIt: function(req, res) {
		var formData = req.body;
		console.log("req.body=", formData);

		beglobal.translations.translate(
		  {text: formData.word, from: formData.originalLanguage, to: formData.newLanguage},
		  function(err, results) {
		    if (err) {
		      console.log('Bad entry');
		    }
		    console.log("these are the results of my translation:", results);
		    
		    res.render('translate', {
		    	results: results
		    });
		  }
		);

	},
	checkQuiz: function(req, res) {
		// 1: Find all users
		User.find({}, function(err, results) {
		// 2. Send the results (all users) to the client
			res.send(results);
		});

		// res.render('quiz');
		// res.send("Checking teh quiz");
	}

};

module.exports = indexController;