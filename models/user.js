var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	language: String,
	words: [String]
	// question: [{
	// 	oldWord: String,
	// 	newWord: String,
	// 	result: Boolean
	// }]
});

module.exports = mongoose.model('user', userSchema);