import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './micro/error-page/error-page.component';
import { IndianCurrencyPipe } from './pipes/indian-currency.pipe';


@NgModule({
  declarations: [ErrorPageComponent, IndianCurrencyPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [IndianCurrencyPipe]
})

export class SharedModule { }
