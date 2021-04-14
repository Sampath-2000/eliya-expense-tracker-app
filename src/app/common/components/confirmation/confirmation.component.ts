import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetService } from 'src/app/budget/services/budget.service';
import { CategoryService } from 'src/app/category/services/category.service';
import { CommonService } from '../../common.service';
import { NotificationService } from '../../notification-service/notification.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  budgetList: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private budgetService: BudgetService,
    private commonService: CommonService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any = {}
  ) { }

  ngOnInit(): void {
    this.getBudgetList()
  }

  getBudgetList() {
    this.commonService.getBudgetList().subscribe((res: any) => {
      var data = res.data;
      this.budgetList = data;
    })
  }

  deleteClicked() {
    if (this.data.isCategory) {
      this.categoryService.deleteCategory(this.data.category).subscribe((res) => {
        if (res) {
          this.dialog.closeAll();
          this.notificationService.showSuccessMessage(`Deleted Sucessfully!!`);
          location.reload();
        }
      }
        , () => {
          this.notificationService.showErrorMessage(`Can't Delete Category!!!`);
          this.dialog.closeAll();
        });
      var categoryId = this.data.category._id;
      var budgetId: any[] = [];
      var position = (pos: any) => pos === categoryId;
      for (var i = 0; i < this.budgetList.length; i++) {
        budgetId.push(this.budgetList[i].categoryId);
        var condition = categoryId == this.budgetList[i].categoryId;
        if (condition) {
          var index = budgetId.findIndex(position);
          this.budgetService.deleteBudget(this.budgetList[index]).subscribe((res) => {
            if (res) {
              this.dialog.closeAll();
              this.notificationService.showSuccessMessage('Deleted Sucessfully!!');
              location.reload();
            }
          })

        }
      }
    }

    if (this.data.isBudget) {
      var categoryId = this.data.category._id;
      var budgetId: any[] = [];
      var position = (pos: any) => pos === categoryId;
      for (var i = 0; i < this.budgetList.length; i++) {
        budgetId.push(this.budgetList[i].categoryId);
        var condition = categoryId == this.budgetList[i].categoryId;
        if (condition) {
          var index = budgetId.findIndex(position);
          this.budgetService.deleteBudget(this.budgetList[index]).subscribe((res) => {
            if (res) {
              this.dialog.closeAll();
              this.notificationService.showSuccessMessage('Deleted Sucessfully!!');
              location.reload();
            }
          })
        }
        if (!condition) {
          this.notificationService.showErrorMessage('Please Add budget To Delete!');
          this.dialog.closeAll();
        }
      }
    }
  }
}
