import { ProductModule } from "../core/ProductModule";
import { Product } from "./product";

export class ProductModules extends ProductModule{

    constructor(product: Product){
        super(product)
    }

}