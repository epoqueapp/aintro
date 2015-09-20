var passport = require('passport');
var User = require('../data/User');
var Firebase = require('firebase');

module.exports = function (app) {
	app.get('/register', function (req, res) {
		res.render('register', {
			layout: 'auth.hbs'
		});
	});

	app.post('/register', function (req, res) {
		User.register(new User({
			username: req.body.username
		}), req.body.password, function (err) {
			if (err) {
				console.log('error while user register!', err);
				return next(err);
			}
			var rootRef = new Firebase('https://aintro.firebaseio.com/');
			rootRef.child(req.body.username).update({
				name: "Jonathan Doe",
				tagline: "Best Web Developer in Town",
				summary: "Unless otherwise noted, sample papers do not necessarily meet all requirements an individual instructor or professional supervisor may have: ask your instructor or supervisor.  In addition, the samples single spaced to save room; however, a proper manuscript given to an instructor or supervisor normally should be double spaced with margins set at or close to 1 unless another format has been requested."
			})
			console.log('user registered!');
			passport.authenticate('local')(req, res, function () {
				res.redirect('/');
			});
		});
	});
};