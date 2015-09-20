

module.exports = function (app) {
	app.get('/login', function (req, res) {
		console.log('this is a login');
		res.render('login', {
			layout: 'auth.hbs'
		});
	});
};