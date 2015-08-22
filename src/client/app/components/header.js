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
var navigation_1 = require('./navigation');
var Header = (function () {
    function Header() {
        this.tagline = "tagline";
    }
    Header = __decorate([
        angular2_1.Component({
            selector: 'header'
        }),
        angular2_1.View({
            directives: [navigation_1.Navigation],
            template: "\n        <header id=\"header\">\n\n          <div class=\"menu_closed\" id=\"menu_closed\" title=\"Close Menu\" data-toggle=\"tooltip\">\n              <i class=\"fa fa-times\"></i>\n          </div>\n\n          <div class=\"logo\">\n              <a href=\"#\"><img src=\"http://placehold.it/122x122\" width=\"122\" height=\"122\" alt=\"Logo\"></a>\n          </div>\n\n          <h4 class=\"tagline\">{{tagline}}</h4>\n\n          <navigation></navigation>\n\n          <!-- #header_social_ul -->\n          <div class=\"social-ul\" id=\"header_social_ul\">\n              <ul>\n                  <li class=\"social-twitter\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li class=\"social-facebook\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li class=\"social-google\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                  <li class=\"social-linkedin\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  <li class=\"social-dribbble\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Dribbble\"><i class=\"fa fa-dribbble\"></i></a></li>\n                  <li class=\"social-behance\"><a href=\"#\" target=\"_blank\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Behance\"><i class=\"fa fa-behance\"></i></a></li>\n              </ul>\n          </div>\n          <!-- End #header_social_ul -->\n\n          <!-- .copyright -->\n          <div class=\"copyright\">\n              <p style=\"margin-bottom:0;\">\u00A9 2015.by <a href=\"#\">AINTRO</a></p>\n          </div>\n          <!-- End.copyright -->\n\n          </header>"
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
})();
exports.Header = Header;
