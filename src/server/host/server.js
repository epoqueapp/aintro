/// <reference path='../../../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
app.use('/assets', express.static(path.join(process.cwd(), '/src/client/assets')));
app.use('/app', express.static(path.join(process.cwd(), '/src/client/app')));
app.use('/partials', express.static(path.join(process.cwd(), '/src/client/partials')));
app.get('/', function (req, res) {
    res.sendFile(path.join(process.cwd(), '/src/client/index.html'));
});
var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('aintro is listening on %s', port);
});
