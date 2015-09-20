var Users = require('../data/User');

module.exports = function (app) {
	app.get('/:username', function (req, res) {
		res.render('profile', {
			username: req.params.username
		});
	});
};