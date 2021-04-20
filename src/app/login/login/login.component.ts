import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from 'src/app/common/notification-service/notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from '../models/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  txtUsername: string | undefined;
  txtPassword: string | undefined;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void { }

  loginCheck(user: Login) {
    this.authService.loginUser(user).subscribe(
      (result: any) => {
        if (result && result.token) {
          this.authService.removeToken();
          this.authService.setToken(result.token);
          this.cookieService.set('name', result.data.name);
          this.cookieService.set('userId', result.data._id);
          this.router.navigateByUrl('app/category');
        }
      },
      (error) => {
        this.notificationService.showErrorMessage('Username Or Password Is Incorrect');
      }
    );
  }
}
