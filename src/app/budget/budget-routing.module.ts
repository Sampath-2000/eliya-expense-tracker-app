import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../guards/app.guard';
import { ErrorPageComponent } from '../shared/micro/error-page/error-page.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AppGuard],
    component: BudgetListComponent
  },

  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
