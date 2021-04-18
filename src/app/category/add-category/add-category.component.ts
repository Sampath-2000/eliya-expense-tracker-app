import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/common/notification-service/notification.service';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { Category } from '../models/category-dto';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();

  @Input() categoryData: {
    name: any;
    icon: any;
  } | any;

  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  addCategory() {
    if (this.category.name && this.category.icon) {
      this.categoryService.addCategory(this.category).subscribe(() => {
        this.notificationService.showSuccessMessage('Category Added Sucessfully!!');
        location.reload()
      });
    }
    else {
      this.notificationService.showErrorMessage('Please Provide Data!!');
    }
  }

  selectIcon() {
    const dialogRef = this.dialog.open(CategoryIconComponent, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((icon: any) => {
      if (icon) {
        this.category.icon = icon;
      }
    });
  }

  updateIcon() {
    const dialogRef = this.dialog.open(CategoryIconComponent, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((icon: any) => {
      if (icon) {
        this.categoryData.icon = icon;
      }
    });
  }

  updateCategory() {
    this.categoryService.updateCategory(this.categoryData).subscribe(() => {
      this.notificationService.showSuccessMessage('Updated Successfully!!');
      location.reload();
    }, () => {
      this.notificationService.showErrorMessage(`Can't Update Category`);
    });
  }

  cancelUpdate() {
    location.reload();
  }
}

