import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName : any;
  isDisplayOptions: boolean = false;  //to display dropdown for logging out the user

  @Input() isCategoryList = false;

  constructor(
    private cookieService : CookieService,
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userName = this.cookieService.get('name');
  }

  logout() {
    this.authService.removeToken();
    this.router.navigateByUrl('/login/auth');
  }
}
