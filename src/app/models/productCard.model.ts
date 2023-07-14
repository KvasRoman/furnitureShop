export default class ProductCard {
    constructor(
        public name: string,
        public shortDescription: string,
        public price: number,
        public imageUrl: string,
        public isNew: boolean = false,
        public hasDiscount: boolean = false,
        public discountPercentage: number | null,
        public discountedPrice: number | null
        ) {

    }
}