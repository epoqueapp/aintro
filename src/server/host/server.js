/// <reference path='../../../typings/tsd.d.ts' />
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hello world out there');
});
var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('aintro is listening on %s', port);
});
