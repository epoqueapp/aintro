

module.exports = function (app) {
	app.get('/:username/resume', function (req, res) {
		res.render('resume');
	});
};