var mongoose = require('mongoose');
mongoose.connect('mongodb://api:ilovesushi@ds051553.mongolab.com:51553/heroku_wqszrk3q', function(err){
	if(err){
		console.log('had an issue connecting' + err);
	}else{
		console.log('I guess we connected!');
	}
});


