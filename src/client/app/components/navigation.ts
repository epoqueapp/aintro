/// <reference path="../../../../typings/tsd.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
  selector: 'navigation'
})
@View({
    directives: [RouterLink],
    templateUrl: '/partials/navigation.html'
})
export class Navigation {

}
