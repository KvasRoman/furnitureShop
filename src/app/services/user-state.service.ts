import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ComponentStateHeader, ComponentStateMain, crumbBarTypes } from '../models/user-state.models';
import {CartProduct} from '../models/productCart.model';
import { CartService } from './cart.service';


export interface UserStateReciver {
    subscribeMain(callBack: any): Subscription;
}


@Injectable({
    providedIn: 'root',
})
export class UserStateService implements UserStateReciver {


    private main: BehaviorSubject<ComponentStateMain> = new BehaviorSubject(
        new ComponentStateMain()
    );
    private header: BehaviorSubject<ComponentStateHeader> = new BehaviorSubject(
        new ComponentStateHeader()
    );
    constructor() {
    }
    updateHeader(value: {
        cart?: CartProduct[]
    }) {
        const currentState = this.header.getValue();
        let subtotal: number = 0;
        value.cart?.forEach(element => {
            subtotal += element.price;
        });
        const newState = { ...currentState, ...value }
        console.log("update header")
        console.log(newState);
        this.header.next(newState);
    }
    subscribeHeader(callBack: (value: ComponentStateHeader) => void): Subscription {
        return this.header.subscribe(callBack);
    }
    updateMain(value: {
        crumbBar?: crumbBarTypes,
        warrantyBar?: boolean
        crumbBarContent?: {
            crumbs: {label: string, link: string}[],
            lastCrumb: string
        }
    }
    ) {
        
        const currentState = this.main.getValue();

        const newState = { ...currentState, ...value };
        this.main.next(newState);
    }
    subscribeMain(callBack: (value: ComponentStateMain) => void): Subscription {
        return this.main.subscribe(callBack);
    }
}