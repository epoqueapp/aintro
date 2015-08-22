/// <reference path='../../../typings/tsd.d.ts' />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./components/app');
var universalInjectables = [
    router_1.routerInjectables,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HTML5LocationStrategy)
];
angular2_1.bootstrap(app_1.App, [universalInjectables]);
