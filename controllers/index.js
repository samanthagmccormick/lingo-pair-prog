var BeGlobal = require('node-beglobal');

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
		res.render('quiz');
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

	}

};

module.exports = indexController;