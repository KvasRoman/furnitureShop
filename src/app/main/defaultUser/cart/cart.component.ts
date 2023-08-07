import { Component, OnDestroy } from "@angular/core";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";
import { MatTableModule } from '@angular/material/table';
import { CartProduct } from "src/app/models/productCart.model";
import { Subscription, every } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { fakeDB } from "src/app/fakeDB/fakeDB";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss', '../../../icons.scss']
})
export class CartComponent implements OnDestroy {
    displayedColumns: string[] = ['imageURL', 'name', 'price', 'quantity', 'id'];
    headerStateSubscription: Subscription;
    cartServiceSubscription: Subscription;
    dbRequestSubscription: Subscription | undefined;
    subtotal: number = 0;
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
    constructor(private userStateService: UserStateService, private cartService: CartService) {
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
            this._updateSubtotal();
        })
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            crumbBarContent: {
                crumbs: [{
                    label: 'Home',
                    link: ''
                }],
                lastCrumb: 'Cart',

            },
            warrantyBar: true
        })
    }
    private ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
        if (argument === undefined || argument === null) {
          throw new TypeError(message);
        }
        return argument;
      }
      RemoveProduct(productId: string){
        this.cartService.RemoveFromCart(productId);
        const index = this.cartProducts.findIndex(p => {return p.id === productId})
        this.cartProducts.splice(index, 1);
        this._updateSubtotal();
      }
      private _updateSubtotal(){
        this.subtotal = 0;
        this.cartProducts.map(prod => {
            this.subtotal += prod.price * prod.quantity;
        })
      }
      ChangeProductQuantity(value: number, productId: string){
        let resValue = value <= 99 && value >= 1? value : value > 99 ? 99 : 1;
        this.cartService.ChangeItemQuantity(productId, resValue);
      }
      ngOnDestroy(): void {
        this.cartServiceSubscription.unsubscribe();
        this.headerStateSubscription.unsubscribe();
        this.dbRequestSubscription?.unsubscribe();
      }
      
}