/// <reference path='../../../../typings/tsd.d.ts' />
import {View, Component} from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet, Router } from 'angular2/router';

import { Profile } from './profile';
import { Resume } from './resume';
import { Header } from './header';

@Component({
    selector: 'aintro-app'
})
@View({
    directives: [RouterLink, RouterOutlet, Header],
    template: `
        <div id="wrappers">
            <header></header>
            <div id="main">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
@RouteConfig([
    { path: '/', component: Profile },
    { path: '/resume', component: Resume }
])

export class App {

}
