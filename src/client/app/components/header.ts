    /// <reference path="../../../../typings/tsd.d.ts"/>
    import {Component, View, bootstrap} from 'angular2/angular2';
    import {RouterLink, RouteParams } from 'angular2/router';
    import * as Rx from 'rx';

    import { Navigation } from './navigation'

    @Component({
      selector: 'header'
    })
    @View({
        directives: [Navigation],
        templateUrl: '/partials/header.html'
    })
    export class Header {
        tagline: string;
        constructor(){
            this.tagline = "tagline"

        }
    }
