var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/assets', express.static('assets'));
app.use('/scripts', express.static('scripts'));

require('./routes/login.js')(app);
require('./routes/register.js')(app);
require('./routes/resume.js')(app);
require('./routes/profile.js')(app);
require('./routes/home.js')(app);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('AINTRO listening at http://%s:%s', host, port);
});
