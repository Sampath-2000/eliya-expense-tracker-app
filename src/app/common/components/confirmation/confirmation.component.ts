import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from '../../notification-service/notification.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any = {}
  ) { }

  ngOnInit(): void { }

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
    }
  }
}
