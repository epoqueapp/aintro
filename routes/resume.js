var Users = require('../data/User');

module.exports = function (app) {
	app.get('/:username/resume', function (req, res) {
		res.render('resume', {
			thisUsername: req.params.username
		});
	});
};