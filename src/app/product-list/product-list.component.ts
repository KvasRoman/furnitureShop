import { Component, ElementRef, Input } from '@angular/core';
import ProductCard from '../models/productCard.model';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../icons.scss','./product-list.component.scss']
})
export class ProductListComponent {
    @Input() quantity: number = 0;
    @Input() data: ProductCard[] | undefined | null =  [];
    constructor(private cartService: CartService) {
        
    }
    AddProduct(e: MouseEvent,id: string){
      this.cartService.AddToCart(id);
      e.stopPropagation();
      e.preventDefault();
    }
}
