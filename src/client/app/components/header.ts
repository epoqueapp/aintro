/// <reference path="../../../../typings/tsd.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
  selector: 'header'
})
@View({
  template: `
  <header id="header">

      <div class="menu_closed" id="menu_closed" title="Close Menu" data-toggle="tooltip">
          <i class="fa fa-times"></i>
      </div>

      <div class="logo">
          <a href="#"><img src="http://placehold.it/122x122" width="122" height="122" alt="Logo"></a>
      </div>

      <h4 class="tagline">This is a lovely area for the tagline</h4>


      <!-- .navigation -->
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
      <!-- End .navigation -->

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

}
