import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class CartService {
    productsSubject: BehaviorSubject<{
        id: string,
        quantity: number
    }[]>;
    products:
        {
            id: string,
            quantity: number
        }[];

    constructor() {
        this.products = [];
        this.productsSubject = new BehaviorSubject<{
            id: string,
            quantity: number
        }[]>([]);
        const cart = localStorage.getItem("cart")
        if (cart) {
            const parsedCart: { id: string, quantity: number }[] = JSON.parse(cart);
            this.products = parsedCart;
            this.productsSubject.next(this.products);
        }
    }
    
    private _update() {
        this.productsSubject.next(this.products);
        localStorage.setItem("cart", JSON.stringify(this.products))
    }
    Subscribe(action: ((value: {
        id: string,
        quantity: number
    }[]) => void)): Subscription {
        return this.productsSubject.subscribe(action);
    }
    AddToCart(productId: string) {
        const productIndex = this.products.findIndex(v => {
            return v.id == productId
        })
        if (productIndex > -1)
            this.products[productIndex].quantity += 1;
        else
            this.products.push({id: productId, quantity: 1})
        this._update()

    }
    RemoveFromCart(productId: string) {
        const productIndex = this.products.findIndex(v => {
            return v.id == productId
        })
        if (productIndex > -1)
            this.products.splice(productIndex, 1);
        this._update()
    }
    ChangeItemQuantity(productId: string, newValue: number) {
        const product = this.products.find(v => {
            v.id = productId
        })
        if (product == undefined)
            throw Error('product was not found in cart')
        this._update()
    }
    FlushProducts(){
        this.products = []
        this.productsSubject.next(this.products);
        localStorage.removeItem('cart');
    }
}