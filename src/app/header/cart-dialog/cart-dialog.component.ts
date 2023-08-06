import { Component, Input, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators"
import { fakeDB } from "src/app/fakeDB/faceDB";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector: 'app-cart-dialog',
    templateUrl: "cart-dialog.component.html",
    styleUrls: ['cart-dialog.component.scss', '../../icons.scss']
})
export class CartDialog {
    products: {
        id: string,
        name: string,
        imageURL: string,
        price: number,
        quantity: number
      }[] = [];
    
    subtotal: number = 0;
    constructor(private cartService: CartService, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.products = data.products;
        this._updateSubtotal();
    }
    private ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
        if (argument === undefined || argument === null) {
            throw new TypeError(message);
        }
        return argument;
    }
    private _updateSubtotal(){
        this.subtotal = 0;
        this.products.map(prod => {
            this.subtotal += prod.price * prod.quantity;
        })
    }
    RemoveProduct(productId: string) {
        this.cartService.RemoveFromCart(productId);
        const index = this.products.findIndex(p => {return p.id === productId})
        this.products.splice(index, 1);
        this._updateSubtotal();
    }
    Flush() {
        this.cartService.FlushProducts();
    }
}