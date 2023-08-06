import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, last } from "rxjs";
import { fakeDB } from "src/app/fakeDB/faceDB";
import ProductCard from "src/app/models/productCard.model";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss', '../../../icons.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    ralatedProducts: Observable<ProductCard[]> = fakeDB.GetProductCardInfos();

    
    constructor(userStateService: UserStateService, private activatedRoute: ActivatedRoute) {
        
        activatedRoute.params.subscribe(params => {
            console.log(params["id"]);
        })
        userStateService.updateMain({
            crumbBar: crumbBarTypes.small,
            crumbBarContent: {
                crumbs: [
                    {
                        label: 'Home',
                        link: ''
                    },
                    {
                        label: 'Shop',
                        link: 'Shop'
                    }
                ],
                lastCrumb: 'Asgaard sofa'
            },
            warrantyBar: false
        })
        
    }
    ngOnInit(): void {
       
    }
    ngOnDestroy(): void {
    
    }
}