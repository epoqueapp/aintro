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
        template: `
        <header id="header">

          <div class="menu_closed" id="menu_closed" title="Close Menu" data-toggle="tooltip">
              <i class="fa fa-times"></i>
          </div>

          <div class="logo">
              <a href="#"><img src="http://placehold.it/122x122" width="122" height="122" alt="Logo"></a>
          </div>

          <h4 class="tagline">{{tagline}}</h4>

          <navigation></navigation>

          <!-- #header_social_ul -->
          <div class="social-ul" id="header_social_ul">
              <ul>
                  <li class="social-twitter"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                  <li class="social-facebook"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                  <li class="social-google"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
                  <li class="social-linkedin"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                  <li class="social-dribbble"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Dribbble"><i class="fa fa-dribbble"></i></a></li>
                  <li class="social-behance"><a href="#" target="_blank" title="" data-toggle="tooltip" data-original-title="Behance"><i class="fa fa-behance"></i></a></li>
              </ul>
          </div>
          <!-- End #header_social_ul -->

          <!-- .copyright -->
          <div class="copyright">
              <p style="margin-bottom:0;">© 2015.by <a href="#">AINTRO</a></p>
          </div>
          <!-- End.copyright -->

          </header>`
    })
    export class Header {
        tagline: string;
        constructor(){
            this.tagline = "tagline"
        }
    }
