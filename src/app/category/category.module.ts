import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { LayoutModule } from '../layout/layout.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CategoryIconComponent } from './category-icon/category-icon.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CategoryListComponent, AddCategoryComponent, CategoryIconComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    LayoutModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class CategoryModule { }
