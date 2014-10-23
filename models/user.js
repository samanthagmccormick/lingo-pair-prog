var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	language: String,
	words: [String],
	completed: Boolean
});

module.exports = mongoose.model('user', userSchema);