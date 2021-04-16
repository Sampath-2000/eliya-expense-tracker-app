import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsRoutingModule } from './wallets-routing.module';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WalletListComponent, AddWalletComponent],
  imports: [
    CommonModule,
    WalletsRoutingModule,
    LayoutModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class WalletsModule { }
