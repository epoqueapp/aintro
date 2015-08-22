/// <reference path='../../../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

var app = express();
app.use('/assets', express.static(path.join(process.cwd(),'/src/client/assets')));
app.use('/app', express.static(path.join(process.cwd(),'/src/client/app')));
app.use('/partials', express.static(path.join(process.cwd(),'/src/client/partials')));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/src/client/index.html'));
});

var server = app.listen(process.env.PORT || 3000, () => {
    var host : string = server.address().address;
    var port : number = server.address().port;
    console.log('aintro is listening on %s', port);
});
