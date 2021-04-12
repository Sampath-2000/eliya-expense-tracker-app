import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './guards/app.guard';
import { ErrorPageComponent } from './shared/micro/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then((module) => module.LoginModule),
  },

  {
    path: 'app',
    canActivate: [AppGuard],
    loadChildren: () => import('../app/layout/layout.module').then((module) => module.LayoutModule)
  },

  {
    path: '**',
    component: ErrorPageComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
