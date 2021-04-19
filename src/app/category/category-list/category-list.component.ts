import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmationComponent } from 'src/app/common/components/confirmation/confirmation.component';
import { NotificationService } from 'src/app/common/notification-service/notification.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {

  categoryList: any;
  categoryData: any;
  showSpinner: boolean = false;

  constructor(
    private titleService: Title,
    private commonService: CommonService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('eliya - Category List');
    this.getCategoryList();
  }

  getCategoryList() {
    this.showSpinner = true;
    this.commonService.getCategoryList().subscribe((res) => {
      this.categoryList = res.data;
      if (this.categoryList) {
        this.showSpinner = false;
      }
    }, () => {
      this.notificationService.showErrorMessage(`Can't Fetch Categories!!`);
    });
  }

  editCategory(data: any) {
    this.categoryData = data;
  }

  isDeleteCategory(category: any) {
    var isCategory = true;
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      data: { category, isCategory }
    });
  }
}
