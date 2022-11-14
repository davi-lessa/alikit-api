import { AliRequest } from "./request";
import { Product } from "../repositories/product";

export class AliKit {
  public request = new AliRequest(this);
  public product: Product;

  constructor(productUrlOrId?: string) {
    this.product = new Product(this, productUrlOrId);
  }
}
