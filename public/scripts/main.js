// This is where our jQuery goes!
// This is client-side JS


// jQuery ready wrapper
$(function(){

	// On click of the submit button
	$('#submitButton').on('click', function(e){
		console.log("Clicked the button");

		var input = $('.input').val();
		console.log('First input: ', input);
	
		var printVal = function(el) {
			return el.val();
		};

		// FROM CHRIS' NOTES
		var results = $('.question input').map(function(){
			return $(this).val();
		}).toArray();

		console.log('Results:', results);

		// FROM CHRIS' NOTES
		$.post('/checkQuiz', {
			id: $('quiz').attr('data-id'),
			results: results
		});

	});


}); // end jQuery wrapper