var express = require('express');
var app = express();

var path = require('path');
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var multer = require('multer');
var s3 = require('multer-s3');

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(bodyParser.json());

var upload = multer({
    storage: s3({
        dirname: 'images',
        bucket: 'aintro-uploads',
        secretAccessKey: "dw0rJVxbFGmU5dw/k9UGugELrM5lC5GTmhIK63hw",
        accessKeyId: "AKIAJACYJIUCQDBA3YJQ",
        region: 'us-east-1',
        filename: function (req, file, cb) {
            var extension = file.originalname.split('.').pop();
            cb(null, (Date.now() + '.' + extension));
        }
    })
})



app.use('/assets', express.static('assets'));
app.use('/scripts', express.static('scripts'));

require('./routes/login.js')(app);
require('./routes/register.js')(app);
require('./routes/resume.js')(app);
require('./routes/profile.js')(app);
require('./routes/home.js')(app);

app.post('/upload', upload.single('image'), function (req, res) {
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
});


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('AINTRO listening at http://%s:%s', host, port);
});
