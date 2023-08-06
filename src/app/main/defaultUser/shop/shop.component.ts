import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { fakeDB } from 'src/app/fakeDB/faceDB';
import ProductCard from 'src/app/models/productCard.model';
import { crumbBarTypes } from 'src/app/models/user-state.models';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../../../icons.scss', './shop.component.scss'],
  
})
export class ShopComponent {
  pRangeSelected: number = 16;
  pRangeChanged: boolean = false;
  public readonly productRange: number[] = [
    16,
    32,
    64
  ];
  
  orderBySelected: string = '';
  orderByChanged: boolean = false;
  public readonly orderBy: {title: string, value: string}[] = [
    {title: 'Default', value: ''},
    {title: 'Name', value: 'name'},
    {title: 'Price', value: 'price'},
  ];
  
  currentPage: number = 1;
  paginationDisplayRange: number = 3;
  public readonly totalResultsNumber: Observable<number> = fakeDB.GetTotalResultsNumber();
  public totalPageNumber: number = 0;
  public readonly data: Observable<ProductCard[]> = fakeDB.GetProductCardInfos();
  constructor(private userStateService: UserStateService) {
    this.userStateService.updateMain({
      crumbBar: crumbBarTypes.big,
      warrantyBar: true,
      crumbBarContent: {
        crumbs: [{
          label: "Home",
          link: ""
        }],
        lastCrumb: 'Shop'
      }
    });
    this.totalResultsNumber.subscribe((v) => {
      this.totalPageNumber = Math.ceil(v / this.pRangeSelected)
    })
  }
  ngOnInit() {
  }
  onProductRangeChange(){
    this.pRangeChanged = true;
  }
  onOrderByChange(){
    this.orderByChanged = true;
  }
  changePage(page: number){
    this.currentPage = page;
  }
}
