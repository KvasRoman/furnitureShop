import { Component } from "@angular/core";
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
        quantity: number
    }[];
    loadedProducts: Observable<{
        id: string,
        name: string,
        imageURL: string,
        price: number,
        quantity: number

    }[]>;
    subtotal: number = 0;
    constructor(private cartService: CartService) {
        this.products = [];
        cartService.Subscribe(value => {
            this.products = value;
        });
        this.loadedProducts = fakeDB.GetCartProducts(this.products.map(v => v.id)).pipe(map(v =>
            v.map(product => ({
                ...product,
                quantity: this.ensure(this.products.find(v => v.id == product.id)).quantity,
            }))
        ), tap(v => {
            this.subtotal = 0;
            v.forEach(product => {
                this.subtotal += product.price
            })
        }));
        
    }
    private ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
        if (argument === undefined || argument === null) {
            throw new TypeError(message);
        }
        return argument;
    }
    RemoveProduct(productId: string) {
        this.cartService.RemoveFromCart(productId);
    }
    Flush() {
        this.cartService.FlushProducts();
    }
}