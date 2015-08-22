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
var Navigation = (function () {
    function Navigation() {
    }
    Navigation = __decorate([
        angular2_1.Component({
            selector: 'navigation'
        }),
        angular2_1.View({
            template: "\n      <nav class=\"navigation\">\n          <ul class=\"list-unstyled\">\n              <li class=\"profile active\">\n                  <a href=\"index.php#profile\" class=\"profile link_menu\"><i class=\"fa fa-user icon_menus\"></i><span class=\"nav-label\">profile</span></a>\n              </li>\n              <li class=\"resume\">\n                  <a href=\"index.php#resume\" class=\"resume link_menu\"><i class=\"fa fa-tasks icon_menus\"></i> <span class=\"nav-label\">resume</span></a>\n              </li>\n              <li class=\"contact\">\n                  <a href=\"index.php#contact\" class=\"contact link_menu\"><i class=\"fa fa-paper-plane icon_menus\"></i> <span class=\"nav-label\">contact</span></a>\n              </li>\n\n          </ul>\n      </nav>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
})();
exports.Navigation = Navigation;
