var passport = require('passport');
var User = require('../data/User');

module.exports = function (app) {
	app.get('/users', function (req, res) {
		User.find({}, function(users, err){
			if(err){
				res.status(500).send(err);
			}else{
				res.send(users);
			}
		})
	});
};