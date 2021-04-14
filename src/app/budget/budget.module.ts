import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LayoutModule } from '../layout/layout.module';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BudgetListComponent, AddBudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    LayoutModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
})
export class BudgetModule { }
