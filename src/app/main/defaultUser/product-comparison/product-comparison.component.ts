import { Component } from "@angular/core";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";


@Component({
    selector: 'app-product-comparison',
    templateUrl: 'product-comparison.component.html',
    styleUrls: ['product-comparison.component.scss']
})
export class ProductComparisonComponent{

    constructor(private userStateService: UserStateService) {
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            crumbBarContent: {
                crumbs: [{label: "Home", link: ''}],
                lastCrumb: "Product Comparison"
            },
            warrantyBar: true
        })
    }
}