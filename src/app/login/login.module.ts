import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],

  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [CookieService],
})

export class LoginModule { }
