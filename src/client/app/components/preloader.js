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
/// <reference path="../../../../typings/tsd.d.ts"/>
var angular2_1 = require('angular2/angular2');
var Preloader = (function () {
    function Preloader() {
    }
    Preloader = __decorate([
        angular2_1.Component({
            selector: 'preloader'
        }),
        angular2_1.View({
            template: "\n  <div class=\"preloader\">\n      <div class=\"spinner\">\n          <div class=\"dot1\"></div>\n          <div class=\"dot2\"></div>\n      </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Preloader);
    return Preloader;
})();
exports.Preloader = Preloader;
