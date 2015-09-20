

module.exports = function (app) {
	app.get('/:username', function (req, res) {
		res.render('profile');
	});
};