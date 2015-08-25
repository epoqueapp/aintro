var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/assets', express.static('assets'));
app.use('/scripts', express.static('scripts'));

app.get('/', function (req, res) {
  res.render('profile');
});

app.get('/resume', function (req, res) {
  res.render('resume');
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('AINTRO listening at http://%s:%s', host, port);
});
