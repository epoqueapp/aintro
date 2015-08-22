/// <reference path="../../../../typings/tsd.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
  selector: 'preloader'
})
@View({
  template: `
  <div class="preloader">
      <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
      </div>
  </div>`
})
export class Preloader {

}
