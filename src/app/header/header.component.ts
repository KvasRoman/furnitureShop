import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartDialog } from './cart-dialog/cart-dialog.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../icons.scss',
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnDestroy {

  cartDialogSubscribtion: Subscription | undefined;
  constructor(private cartDialog: MatDialog) {

  }

  OpenCartDialog() {
    const config = new MatDialogConfig();
    config.position = {
      top: '0px',
      right: '0px',
    };
    config.panelClass = ['cartDialog']
    const dialogRef = this.cartDialog.open(CartDialog, config);
    this.cartDialogSubscribtion = dialogRef.afterClosed().subscribe((result) => {

    });
  }
  ngOnDestroy(): void {
    this.cartDialogSubscribtion?.unsubscribe();
  }
}
