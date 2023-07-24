export enum crumbBarTypes{
    big = 'big',
    small = 'small',
    none = 'none'
}

export class ComponentStateMain{
    crumbBar: crumbBarTypes = crumbBarTypes.none;
    warrantyBar: boolean = false;
}