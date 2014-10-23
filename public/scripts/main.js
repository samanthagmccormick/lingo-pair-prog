// This is where our jQuery goes!
// This is client-side JS


// jQuery ready wrapper
$(function(){

	// On click of the submit button
	$('#submitButton').on('click', function(e){
		console.log("Clicked the button");

		// FROM CHRIS' NOTES
		var results = $('.question input').map(function(el){
			return el.val()
		}).toArray();

		// FROM CHRIS' NOTES
		$.post('/checkQuiz', {
			id: $('quiz').attr('data-id'),
			results: results
		});

	});


}); // end jQuery wrapper