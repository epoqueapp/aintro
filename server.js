/* global serializeUser */
var express = require('express');
var app = express();

var path = require('path');
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var s3 = require('multer-s3');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'anything' }));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());
var User = require('./data/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

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


app.use(function (req, res, next) {
  app.locals.myUser = req.user;
  next();
})
app.use('/assets', express.static('assets'));
app.use('/scripts', express.static('scripts'));

require('./routes/backend.js')(app);
require('./routes/users.js')(app);
require('./routes/login.js')(app);
require('./routes/register.js')(app);
require('./routes/resume.js')(app);
require('./routes/profile.js')(app);
require('./routes/home.js')(app);


app.post('/upload', upload.single('image'), function (req, res) {
    var first = "https://s3.amazonaws.com/aintro-uploads/";
    var imageUrl =  first + req.file.key;
    res.send({
        imageUrl: imageUrl
    });
});

require('./data/mongooseSetup');
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('AINTRO listening at http://%s:%s', host, port);
});
