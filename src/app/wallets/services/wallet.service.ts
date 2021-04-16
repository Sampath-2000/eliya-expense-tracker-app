import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private BACKEND_API: string = environment.baseUrl;
  httpOptions: any;

  constructor(
    private http: HttpClient,
    private authservice: AuthService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authservice.getToken(),
      }),
    };
  }

  addWallet(data: any) {
    return this.http.post(`${this.BACKEND_API}/wallets`, data, this.httpOptions);
  }

  deleteWallet(data: any) {
    return this.http.delete(`${this.BACKEND_API}/wallets/` + data._id, this.httpOptions);
  }

  updateWallet(data: any) {
    return this.http.put(`${this.BACKEND_API}/wallets/` + data._id, data, this.httpOptions);
  }
}
