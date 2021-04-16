import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './shared/material.module';
import { CategoryModule } from './category/category.module';
import { ConfirmationComponent } from './common/components/confirmation/confirmation.component';
import { BudgetModule } from './budget/budget.module';
import { WalletsModule } from './wallets/wallets.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,
    CategoryModule,
    LayoutModule,
    MaterialModule,
    BudgetModule,
    WalletsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
