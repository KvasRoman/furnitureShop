import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ComponentStateMain, crumbBarTypes } from './user-state.models';


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
    constructor() {

    }
    
    updateMain(value: {
        crumbBar?: crumbBarTypes,
        warrantyBar?: boolean
    }
    ) {
        const currentState = this.main.getValue();
        const newState = { ...currentState, ...value};
        this.main.next(newState);
    }
    subscribeMain(callBack: (value: ComponentStateMain) => void): Subscription {
        return this.main.subscribe(callBack);
    }
}