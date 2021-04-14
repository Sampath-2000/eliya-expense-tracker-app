import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

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

  addBudget(data: any) {
    return this.http.post(`${this.BACKEND_API}/budgets?categoryId=` + data.categoryId, data, this.httpOptions);
  }

  updateBudget(data: any) {
    return this.http.put(`${this.BACKEND_API}/budgets/` + data._id, data, this.httpOptions);
  }

  deleteBudget(data: any){
    return this.http.delete(`${this.BACKEND_API}/budgets/`+ data._id, this.httpOptions);
  }
}
