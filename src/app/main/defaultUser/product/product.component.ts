import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription, last } from "rxjs";
import { Configuration } from "src/app/configuration";
import { fakeDB } from "src/app/fakeDB/fakeDB";
import ProductCard from "src/app/models/productCard.model";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

interface IProduct{
    id: string,
    category: string,
    name: string,
    briefDescription: string,
    shortDescription: string,
    description: string,
    rating: number,
    price: number,
    isNew: boolean,
    discountPercentage: number,
    discountedPrice: number,
    sku: string,
    productImages: {
        id: string,
        url: string,
        orderNumber: number,
        productId: string,
        productRef: string
    }[]
}

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss', '../../../icons.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    ralatedProducts: Observable<ProductCard[]> = fakeDB.GetProductCardInfos();
    rating : number = 4.2;
    data: IProduct
    productSubscribtion?: Subscription
    constructor(private userStateService: UserStateService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
        this.data = {} as IProduct;
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
        this.activatedRoute.params.subscribe(params => {
            console.log(params["id"]);
            this.productSubscribtion = this.httpClient.get<IProduct>(Configuration.apiUrl + '/Product', {
                params: {
                    id: params["id"]
                }
            }).subscribe(v => {
                this.data = v;
                console.log(v);
                this.userStateService.updateMain({
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
                        lastCrumb: this.data.name
                    },
                    warrantyBar: false
                })})
        })
       
    }
    ngOnDestroy(): void {
        this.productSubscribtion?.unsubscribe();
    }
}