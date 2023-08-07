import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartDialog } from './cart-dialog/cart-dialog.component';
import { Subscription, tap } from 'rxjs';
import { UserStateService } from '../services/user-state.service';
import { CartService } from '../services/cart.service';
import { fakeDB } from '../fakeDB/fakeDB';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../icons.scss',
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnDestroy {

  cartDialogSubscription: Subscription | undefined;
  headerStateSubscription: Subscription;
  cartServiceSubscription: Subscription;
  dbRequestSubscription: Subscription | undefined;
  cartProducts: {
    id: string,
    name: string,
    imageURL: string,
    price: number,
    quantity: number
  }[] = [];
  localStoredProducts: {
    id: string,
    quantity: number
  }[] = []
  constructor(private cartDialog: MatDialog, private userStateService: UserStateService, private cartService: CartService) {
    this.cartServiceSubscription = cartService.Subscribe(v => {
      this.localStoredProducts = v;
      this.dbRequestSubscription = fakeDB.GetCartProducts(v.map(el => { return el.id })).subscribe(el => {
        userStateService.updateHeader({
          cart: el
        })
      });

    })
    this.headerStateSubscription = userStateService.subscribeHeader((value) => {
      const localStoredProducts = this.localStoredProducts;
      this.cartProducts = value.cart.map(v => {
        return {
          ...v, ...this.ensure(localStoredProducts.find(el => {
            return el.id === v.id
          }))
        }
      })
    })
  }
  private ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }
    return argument;
  }
  OpenCartDialog() {
    const config = new MatDialogConfig();
    config.position = {
      top: '0px',
      right: '0px',
    };
    config.data = {
      products: this.cartProducts
    }
    console.log('cart dialog')
    console.log(config.data);
    config.panelClass = ['cartDialog']
    const dialogRef = this.cartDialog.open(CartDialog, config);
    this.cartDialogSubscription = dialogRef.afterClosed().subscribe((result) => {

    });
  }
  ngOnDestroy(): void {
    this.cartDialogSubscription?.unsubscribe();
    this.cartServiceSubscription.unsubscribe();
    this.headerStateSubscription.unsubscribe();
    this.dbRequestSubscription?.unsubscribe();
  }
}
