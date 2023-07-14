import { Observable, delay, of } from "rxjs";
import ProductCard from "../models/productCard.model";

class FakeDB{
    constructor() {
        
    }
    public GetProductCardInfos(): Observable<ProductCard[]>{
        return of(
            [
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 1.png", false, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 4.png", false, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 9.png", false, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 6.png", false, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 7.png", false, false, null, null),
                new ProductCard("Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 8.png", false, false, null, null),
            ]
        ).pipe(delay(2000));
    }
}


export const fakeDB: FakeDB = new FakeDB();