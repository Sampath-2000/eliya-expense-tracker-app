import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmationComponent } from 'src/app/common/components/confirmation/confirmation.component';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {

  walletList: any;
  walletData: any;

  constructor(
    private titleService: Title,
    private commonService: CommonService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Wallet List');
    this.getWalletList();
  }

  getWalletList() {
    this.commonService.getWalletList().subscribe((res) => {
      this.walletList = res.data;
    })
  }

  editWallet(data: any) {
    this.walletData = data;
  }

  deleteWallet(wallet: any) {
    var isWallet = true;
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      data: { wallet, isWallet }
    });
  }
}
