var mongoose = require('mongoose');
var User = require('../user.js');

var quizDisplay = function(wordList){
	for (i=0; i <wordList.length; i++) {

		console.log(wordList[i]);

		// '<li>' + wordList[i] + '</li><input';

	}
};

// User.find({}, function(err, results){
// 	if(results.length === 0) {
// 		var userOne = new User({
// 			language: 'eng',
// 			question: [
// 			{
// 				oldWord: 'Horse',
// 				newWord: 'Cheval',
// 				result: true
// 			},
// 			{
// 				oldWord: 'Daughter',
// 				newWord: 'Fille',
// 				result: true
// 			},
// 			{
// 				oldWord: 'Son',
// 				newWord: 'Fils',
// 				result: true
// 			}
// 			]
// 		});
// 		userOne.save();
// 	}
// });