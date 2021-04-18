import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/notification-service/notification.service';
import { Budget } from '../models/budget-dto';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss']
})
export class AddBudgetComponent implements OnInit {

  budget: Budget = new Budget();

  @Input() categoryData: {} | any;

  @Input() amount: any;

  @Input() budgetData: any;

  @Input() isPresent: boolean | any;

  constructor(
    private budgetService: BudgetService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void { }

  addBudget() {
    this.budget.amount = this.amount;
    this.budget.categoryId = this.categoryData._id;
    if (this.budget.amount > 0) {
      this.budgetService.addBudget(this.budget).subscribe(() => {
        this.notificationService.showSuccessMessage('Added Budget Sucessfully!!');
        location.reload();
      }
        , () => {
          this.notificationService.showErrorMessage('Cannot Add Budget Try Again Later!!');
        })
    }
    else {
      this.notificationService.showErrorMessage('Please Add Amount!!');
    }
  }

  updateBudget() {
    this.budget.amount = this.amount;
    this.budget.categoryId = this.categoryData._id;
    this.budget._id = this.budgetData._id;
    this.budgetService.updateBudget(this.budget).subscribe(() => {
      this.notificationService.showSuccessMessage('Updated Budget Sucessfully!!');
      location.reload();
    }, () => {
      this.notificationService.showErrorMessage('Cannot Update Budget!!');
    })
  }

  cancelUpdate() {
    location.reload();
  }
}