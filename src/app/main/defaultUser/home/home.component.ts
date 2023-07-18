import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { fakeDB } from 'src/app/fakeDB/faceDB';
import homePageSlide from 'src/app/models/homePageSlide.model';
import ProductCard from 'src/app/models/productCard.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../icons.scss','./home.component.scss']
})
export class HomeComponent {
    public readonly quantity: number = 8;
    public readonly data: Observable<ProductCard[]> =  fakeDB.GetProductCardInfos();
    public readonly slides: Observable<homePageSlide[]> = fakeDB.GetHomePageSlides();
}
