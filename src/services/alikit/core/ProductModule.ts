import { Product } from "../repositories/product";

export class ProductModule{

    protected product: Product

    constructor(product: Product){
        this.product = product;
    }
}