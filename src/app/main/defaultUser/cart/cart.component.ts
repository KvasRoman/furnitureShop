import { Component } from "@angular/core";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss', '../../../icons.scss']
})
export class CartComponent {

    constructor(private userStateService: UserStateService) {
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            warrantyBar: true
        })
    }
}