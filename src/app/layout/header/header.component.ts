import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName : any;
  isDisplayOptions: boolean = false;  //to display dropdown for logging out the user

  @Input() isCategoryList = false;
  @Input() isBudgetList = false;
  @Input() isWalletList = false;

  constructor(
    private cookieService : CookieService,
    private authService : AuthService,
    private router : Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userName = this.cookieService.get('name');
  }

  logout() {
    this.authService.removeToken();
    this.router.navigateByUrl('/login/auth');
  }

  openAddExpense(){
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '30%',
    });
  }
}
