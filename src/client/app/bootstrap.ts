
/// <reference path='../../../typings/tsd.d.ts' />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';


import { App } from './components/app';


var universalInjectables = [
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(App, [universalInjectables]);
