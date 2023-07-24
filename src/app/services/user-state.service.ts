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
    private removeUndefinedFields<T>(obj: T): Partial<T> {
        const result: any = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
                result[key] = obj[key];
            }
        }
        return result;
    }
    
    private main: BehaviorSubject<ComponentStateMain> = new BehaviorSubject(
        new ComponentStateMain()
    );
    constructor() {

    }
    
    updateMain(value: {
        crumbBar: crumbBarTypes | undefined
    }
    ) {
        const currentState = this.main.getValue();
        const newState = { ...currentState, ...this.removeUndefinedFields(value) };
        this.main.next(newState);
    }
    subscribeMain(callBack: (value: ComponentStateMain) => void): Subscription {
        return this.main.subscribe(callBack);
    }
}