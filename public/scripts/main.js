// This is where our jQuery goes!
// This is client-side JS

// var renderQuiz = function(quizData) {
// 	var el = $('<li>');
// 	el.append('<p><em>' + quizData.question + '</em></p>');
// 	return el;
// };


// // jQuery ready wrapper
// $(function(){
// 	// TO VIEW LIST OF ALL QUIZ QUESTIONS....
// 		// On page load, pull down the list of quiz questions using AJAX
// 		// and render it to the page
// 	$.get('/api/getQuiz', {}, function(responseData){
// 		console.log(responseData);
// 		// console.log('getQuiz response:', responseData[0]);
		
// 		// console.log('getQuiz response:', responseData[0].quiz[0].oldWord);
// 		// console.log('getQuiz answer:', responseData[0].quiz[0].newWord);
		
// 		// console.log('getQuiz response:', responseData[0].quiz[1].oldWord);
// 		// console.log('getQuiz answer:', responseData[0].quiz[1].newWord);

// 		// console.log('getQuiz response:', responseData[0].quiz[2].oldWord);
// 		// console.log('getQuiz answer:', responseData[0].quiz[2].newWord);
// 		// console.log(wordList[0]);

// 		// // // var questionEl = randomWord(10);

// 		// $('#question-list').append(responseData[0].quiz[0].oldWord);
// 		// $('#question-list').append(responseData[0].quiz[1].oldWord);
// 		// $('#question-list').append(responseData[0].quiz[2].oldWord);


// 		// for(var i = 0; i < 10; i++) {
// 		// 	// Use your renderQuiz function to output your seed user data
// 		// 	var questionEl = renderQuiz(responseData[0].quiz[0].oldWord);
// 		// 	$('#question-list').append(questionEl);
// 		// }
// 	}); // end get quiz

// }); // end jQuery wrapper