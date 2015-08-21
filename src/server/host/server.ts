/// <reference path='../../../typings/tsd.d.ts' />

import express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('hello world out there');
});

var server = app.listen(3000, () => {
    var host : string = server.address().address;
    var port : number = server.address().port;
    console.log('aintro is listening on %s', port);
});
