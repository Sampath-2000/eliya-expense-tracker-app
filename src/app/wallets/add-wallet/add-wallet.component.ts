import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/notification-service/notification.service';
import { Wallet } from '../models/wallets-dto';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {

  @Input() walletData: any;

  wallet: Wallet = new Wallet();

  constructor(
    private walletService: WalletService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
  }

  addWallet() {
    if (this.wallet.name && this.wallet.amount && this.wallet.description) {
      this.walletService.addWallet(this.wallet).subscribe(() => {
        this.notificationService.showSuccessMessage('Added Wallet Sucessfully!');
        location.reload();
      }, () => {
        this.notificationService.showErrorMessage('You Have Already Added the data or Something Went wrong Try again later..!');
      })
    }
    else {
      this.notificationService.showErrorMessage("Please Add the Data");
    }
  }

  updateWallet() {
    if (this.walletData.name && this.walletData.amount && this.walletData.description) {
      this.walletService.updateWallet(this.walletData).subscribe(() => {
        this.notificationService.showSuccessMessage('Updated Wallet Sucessfully!');
        location.reload();
      }, () => {
        this.notificationService.showErrorMessage('Cannot Update Wallet Please Try Again later');
      })
    }
    else {
      this.notificationService.showErrorMessage('Please Add Data To Update');
    }
  }

  cancelUpdate() {
    this.walletData = null;
  }
}
