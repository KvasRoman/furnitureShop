import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Configuration } from 'src/app/configuration';
import { fakeDB } from 'src/app/fakeDB/fakeDB';
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
  
  orderBySelected: string = 'Default';
  orderByChanged: boolean = false;
  public readonly orderBy: {title: string, value: string}[] = [
    {title: 'Default', value: 'Default'},
    {title: 'Name', value: 'NameAsc'},
    {title: 'Price', value: 'PriceAsc'},
  ];
  
  currentPage: number = 1;
  paginationDisplayRange: number = 3;
  public readonly totalResultsNumber: number = 0;
  public totalPageNumber: number = 0;
  public $data: Observable<{
    total: number,
    cards: ProductCard[]
  }>
  constructor(private userStateService: UserStateService, private http: HttpClient) {
    this.$data = this.getProducts();
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
  }
  toPageNumber(value: number){
    Math.ceil(value / this.pRangeSelected)
  }
  ngOnInit() {
     this.getProducts();
  }
  onProductRangeChange(value: number){
    this.pRangeChanged = true;
    this.pRangeSelected = value;
    this.getProducts();
  }
  onOrderByChange(value: string){
    this.orderByChanged = true;
    this.orderBySelected = value;
    this.getProducts();
  }
  changePage(page: number){
    this.currentPage = page;
    this.getProducts();
  }
  private getProducts(): Observable<{
    total: number,
    cards: ProductCard[]
  }>{
    this.$data = this.http.get<{
      total: number,
      cards: ProductCard[]
    }>(Configuration.apiUrl + '/ProductCard',{
      params: {
        Page: this.currentPage - 1,
        PageSize: this.pRangeSelected,
        OrderBy: this.orderBySelected
      }
     }
     )
     return this.$data;

  }
}
