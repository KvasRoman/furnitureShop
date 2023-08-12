import { Component } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { fakeDB } from "src/app/fakeDB/fakeDB";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { CartService } from "src/app/services/cart.service";
import { UserStateService } from "src/app/services/user-state.service";
import { HttpClient } from '@angular/common/http';
import { Configuration } from "src/app/configuration";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss']
})
export class CheckoutComponent {

    countryRegions: Observable<{id: number, name: string}[]>;
    countryRegionChanged: boolean = false;
    countyRegionSelected: number = 1;
    provinceChanged: boolean = false;
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
    constructor(private http: HttpClient, private userStateService: UserStateService, private cartService: CartService) {
        this.countryRegions = http.get<{id: number, name: string}[]>(Configuration.apiUrl + "/Country");
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
                crumbs: [{ label: 'Home', link: '' }],
                lastCrumb: 'Checkout'
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
    private _updateSubtotal() {
        this.subtotal = 0;
        this.cartProducts.map(prod => {
            this.subtotal += prod.price * prod.quantity;
        })
    }
    ProvinceChange(){
        this.provinceChanged = true;
    }
    CountryRegionChange(){
        this.countryRegionChanged = true;
    }
}
