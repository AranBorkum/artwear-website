import { Component } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userLoggedIn: boolean = false;

  constructor(
    public authService: AuthService
  ) {
    this.userLoggedIn = authService.isLoggedIn;
  }

}
