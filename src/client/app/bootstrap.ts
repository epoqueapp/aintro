
/// <reference path='../../../typings/tsd.d.ts' />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HTML5LocationStrategy } from 'angular2/router';


import { App } from './components/app';


var universalInjectables = [
    routerInjectables,
    bind(LocationStrategy).toClass(HTML5LocationStrategy)
];

bootstrap(App, [universalInjectables]);
