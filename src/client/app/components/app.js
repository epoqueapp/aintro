var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path='../../../../typings/tsd.d.ts' />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var profile_1 = require('./profile');
var resume_1 = require('./resume');
var header_1 = require('./header');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'aintro-app'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink, router_1.RouterOutlet, header_1.Header],
            template: "\n        <div id=\"wrappers\">\n            <header></header>\n            <div id=\"main\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
        }),
        router_1.RouteConfig([
            { path: '/', component: profile_1.Profile },
            { path: '/resume', component: resume_1.Resume }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
