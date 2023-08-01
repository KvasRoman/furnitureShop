import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { crumbBarTypes } from "src/app/services/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss', '../../../icons.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    constructor(userStateService: UserStateService, private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(params => {
            console.log(params["id"]);
        })
        userStateService.updateMain({
            crumbBar: crumbBarTypes.small,
            warrantyBar: false
        })
    }
    ngOnInit(): void {
       
    }
    ngOnDestroy(): void {
    
    }
}