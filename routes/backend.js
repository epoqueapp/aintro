
module.exports = function (app) {
	app.get('/backend', function (req, res) {
		res.render('backend', {
			layout: 'admin.hbs'
		})
	});
}
