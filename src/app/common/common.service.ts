import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private BACKEND_API: string = environment.baseUrl;
  httpOptions: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
  }

  getCategoryList(): Observable<any> {
    return this.http.get(`${this.BACKEND_API}/categories?isActive=true` + '&userId=' + this.cookieService.get('userId'), this.httpOptions);
  }

  getBudgetList(): Observable<any> {
    return this.http.get(`${this.BACKEND_API}/budgets?isActive=true` + '&userId=' + this.cookieService.get('userId'), this.httpOptions);
  }

  getWalletList(): Observable<any> {
    return this.http.get(`${this.BACKEND_API}/wallets?isActive=true` + '&userId=' + this.cookieService.get('userId'), this.httpOptions);
  }
}
