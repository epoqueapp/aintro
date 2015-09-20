var passport = require('passport');
var User = require('../data/User');

module.exports = function (app) {
	app.get('/login', function (req, res) {
		if(req.user){
			res.redirect('/' + req.user.username);	
		}else{
			res.render('login', {
				layout: 'auth.hbs'
			});	
		}
	});

	app.post('/login', passport.authenticate('local'), function (req, res) {
		res.redirect('/' + req.user.username);
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

};