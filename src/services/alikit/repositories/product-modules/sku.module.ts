import { ProductModule } from "../../core/product-module";
import { SkuModuleOptions } from "../../types";
import { Product } from "../product";

export class SkuModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["productSKUPropertyList"];
  }

  get data(): SkuModuleOptions {
    return super.data;
  }
}
