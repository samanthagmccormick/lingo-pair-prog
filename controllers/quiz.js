var BeGlobal = require('node-beglobal');
var User = require('../models/user.js');
var randomWords = require('random-words');

var quizController = {
	// Go into db, find all the user items, and list them out on the actual page
	getQuiz: function(req, res){

		// Find all user/quiz items
		User.find({}, function(err, results) {
			// send back the results (the list of all music)
			// res.send(results);
			user.language = req.body;
			console.log(user.language);


		});

	}
};

module.exports = quizController;