export default class ProductCard {
    constructor(
        public id: string,
        public name: string,
        public briefDescription: string,
        public price: number,
        public imageUrl: string,
        public isNew: boolean = false,
        public hasDiscount: boolean = false,
        public discountPercentage: number | null,
        public discountedPrice: number | null
        ) {

    }
}