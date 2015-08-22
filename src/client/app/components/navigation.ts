/// <reference path="../../../../typings/tsd.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
  selector: 'navigation'
})
@View({
  template: `
      <nav class="navigation">
          <ul class="list-unstyled">
              <li class="profile active">
                  <a href="index.php#profile" class="profile link_menu"><i class="fa fa-user icon_menus"></i><span class="nav-label">profile</span></a>
              </li>
              <li class="resume">
                  <a href="index.php#resume" class="resume link_menu"><i class="fa fa-tasks icon_menus"></i> <span class="nav-label">resume</span></a>
              </li>
              <li class="contact">
                  <a href="index.php#contact" class="contact link_menu"><i class="fa fa-paper-plane icon_menus"></i> <span class="nav-label">contact</span></a>
              </li>

          </ul>
      </nav>
      `
})
export class Navigation {

}
