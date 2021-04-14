import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../guards/app.guard';
import { ErrorPageComponent } from '../shared/micro/error-page/error-page.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'category',
    canActivate: [AppGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../category/category.module').then((module) => module.CategoryModule)
      },
      {
        path: '**', component: ErrorPageComponent
      }
    ]
  },

  {
    path: 'budget',
    canActivate: [AppGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../budget/budget.module').then((module) => module.BudgetModule)
      },
      {
        path: '**', component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
