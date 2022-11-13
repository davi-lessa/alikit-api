import { ProductModule } from "../../core/product-module";
import { CommonModuleOptions } from "../../types";
import { Product } from "../product";

export class CommonModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["categoryId", "currencyCode", "productId", "preSale", "sellerAdminSeq"];
  }

  get data(): CommonModuleOptions {
    return super.data;
  }
}
