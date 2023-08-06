import CartProduct from "./productCart.model";

export enum crumbBarTypes{
    big = 'big',
    small = 'small',
    none = 'none'
}

export class ComponentStateMain{
    crumbBar: crumbBarTypes = crumbBarTypes.none;
    warrantyBar: boolean = false;
}
export class ComponentStateHeader{
    cart: CartProduct[] = [];
    subtotal: number = 0;
}