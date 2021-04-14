import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmationComponent } from 'src/app/common/components/confirmation/confirmation.component';
import { NotificationService } from 'src/app/common/notification-service/notification.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  categoryList: any;
  budgetList: any;
  categoryData: any;
  amount: any;
  budgetData: any;
  isPresent: boolean = false;

  constructor(
    private titleService: Title,
    private commonService: CommonService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('eliya - Budget List');
    this.getCategoryList();
    this.getBudgetList();
  }

  getCategoryList() {
    this.commonService.getCategoryList().subscribe((res) => {
      this.categoryList = res.data;
    }, () => {
      this.notificationService.showErrorMessage(`Can't Fetch Budgets...!`);
    })
  }

  getBudgetList() {
    this.commonService.getBudgetList().subscribe((res) => {
      this.budgetList = res.data;
    })
  }

  editCategory(category: any) {
    this.categoryData = category;
    let categoryId: any[] = [];
    let budgetId: any[] = [];
    categoryId.push(category._id);
    var position = (pos: any) => pos === category._id;
    for (var i = 0; i < this.budgetList.length; i++) {
      budgetId.push(this.budgetList[i].categoryId);
      var condition = category._id === this.budgetList[i].categoryId;
      if (condition) {
        var index = budgetId.findIndex(position);
        var amount = this.budgetList[index].amount;
        this.budgetData = this.budgetList[index];
        this.amount = amount;
        this.isPresent = condition;
      }
      if (!amount) {
        this.isPresent = false;
        this.amount = 0;
      }
    }
  }

  isDeleteBudget(category: any){
    var isBudget = true;
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      data: { category, isBudget }
    });
  }
}
