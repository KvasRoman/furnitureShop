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
  orderBySelected: string = 'Default';
  orderByChanged: boolean = false;

  public readonly productRange: number[] = [
    16,
    32,
    64
  ];
  public readonly orderBy: {title: string, value: string}[] = [
    {title: 'Default', value: 'Default'},
    {title: 'Name', value: 'NameAsc'},
    {title: 'Price', value: 'PriceAsc'},
  ];
  
  
  
  currentPage: number = 1;
  paginationDisplayRange: number = 3;
  public totalResultsNumber: number = 0;
  public totalPageNumber: number = 0;

  public products?: ProductCard[];

  private productsSubscription : Subscription;

  constructor(private userStateService: UserStateService, private http: HttpClient) {
    this.productsSubscription = this.http.get<{
      total: number,
      cards: ProductCard[]
    }>(Configuration.apiUrl + '/ProductCard',{
      params: {
        Page: this.currentPage - 1,
        PageSize: this.pRangeSelected,
        OrderBy: this.orderBySelected
      }
     }
     ).subscribe(p => {
      this.products = p.cards;
      this.totalResultsNumber = p.total;
      this.totalPageNumber = this.toPageNumber(this.totalResultsNumber);
     })
    
  }
  toPageNumber(value: number): number{
    return Math.ceil(value / this.pRangeSelected)
  }
  ngOnInit() {
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
  onProductRangeChange(value: number){
    this.pRangeChanged = true;
    this.pRangeSelected = value;
    this.totalPageNumber = this.toPageNumber(this.totalResultsNumber);
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
  getProductRangeLimit(number: number): number{
    return number > this.totalResultsNumber ? this.totalResultsNumber : number;
  }
  private getProducts(){
    this.productsSubscription.unsubscribe();
    this.products = undefined;
    this.productsSubscription = this.http.get<{
      total: number,
      cards: ProductCard[]
    }>(Configuration.apiUrl + '/ProductCard',{
      params: {
        Page: this.currentPage - 1,
        PageSize: this.pRangeSelected,
        OrderBy: this.orderBySelected
      }
     }
     ).subscribe(p => {
      this.products = p.cards;
      this.totalResultsNumber = p.total;
     })

  }
}
