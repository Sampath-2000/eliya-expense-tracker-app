import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [HeaderComponent, LayoutComponent, SidenavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class LayoutModule { }
