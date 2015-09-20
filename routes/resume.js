var Users = require('../data/User');

module.exports = function (app) {
	app.get('/:username/resume', function (req, res) {
		Users.findOne({
			username: req.params.username
		}, function (err, user) {
			if (err) {
				console.log('err');
			} else {
				res.render('resume', {
					user: user
				});
			}

		});
	});
};