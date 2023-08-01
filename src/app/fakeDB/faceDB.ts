import { Observable, delay, of } from "rxjs";
import ProductCard from "../models/productCard.model";
import homePageSlide from "../models/homePageSlide.model";

class FakeDB {
    constructor() {

    }
    public GetProductCardInfos(): Observable<ProductCard[]> {
        return of(
            [
                new ProductCard("47d2b9c4-23bd-46a7-84a6-49d7ac07b6a3","Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 1.png", false, false, null, null),
                new ProductCard("07aaeab5-2455-4f0f-b88a-3f6135336980", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("d902e9b1-e5ff-4112-8dd0-def813009947", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("5e9acf0e-536e-4711-95d9-7fe501274929", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("1448bb7d-ff07-4f31-bc49-8edaff2a5a91", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 4.png", false, false, null, null),
                new ProductCard("c60b1d9f-29b1-4149-906f-ca38e3b9e300", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 9.png", false, false, null, null),
                new ProductCard("82f56cd6-57fa-42c0-9ea6-bd27d56b3daa", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("b07acad6-e53c-418e-bd84-c45e439ed0ba", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 6.png", false, false, null, null),
                new ProductCard("fcda31b0-65b2-4412-87de-0d3f141d24a3", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("445f375c-41c5-477b-8d60-b8b376a260b6", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 7.png", false, false, null, null),
                new ProductCard("472105ad-e606-4500-8297-7d37c43fb3aa", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("0d097ff2-8cf1-43b0-ab3a-3510a1052592", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 8.png", false, false, null, null),
                new ProductCard("89550076-a8f0-4491-8da9-fc59b58ed35a", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("c77c44a0-a406-4caa-924f-e1f85e0f8319", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 4.png", false, false, null, null),
                new ProductCard("a1ccd1c2-0648-4700-a14c-017a6ea70c09", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 9.png", false, false, null, null),
                new ProductCard("4934677a-d524-4c43-9f46-09f1503ccd5f", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("f1d75ca1-cdbf-4c45-9b50-1da8ad417ab5", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 6.png", false, false, null, null),
                new ProductCard("f0d4b9f2-a2e5-4cd1-808e-baddba5f3dee", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard("1c92995f-7f2f-4a38-be97-2267713c5a0d", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 7.png", false, false, null, null),
                new ProductCard("57414c0e-dc66-4ac9-b53f-8ceab034a5c3", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard("512d8a00-819c-4bc7-9b20-f9c0b4f6af8a", "Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 8.png", false, false, null, null),
            ]
        ).pipe(delay(1000));
    }
    public GetTotalResultsNumber(): Observable<number>{
        return of(
            129
        )
        .pipe(
            delay(1000)
        )
    }
    public GetHomePageSlides(): Observable<homePageSlide[]> {
        return of(
            [
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    })

            ]
        ).pipe(delay(1000))
    }
}


export const fakeDB: FakeDB = new FakeDB();