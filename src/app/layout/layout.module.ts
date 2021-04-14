import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [HeaderComponent, LayoutComponent, SidenavComponent, AddExpenseComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class LayoutModule { }
