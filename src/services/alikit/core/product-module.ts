import { Product } from "../repositories/product";

export class ProductModule {
  protected product: Product;
  private moduleKey: string;

  constructor(product: Product, moduleKey: string) {
    this.product = product;
    this.moduleKey = moduleKey;
  }

  get data() {
    return this.product.dom.window.runParams.data[this.moduleKey];
  }
}
