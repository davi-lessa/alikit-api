import { ProductModule } from "../../core/product-module";
import { QuantityModuleOptions } from "../../types";
import { Product } from "../product";

export class QuantityModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["lot", "totalAvailQuantity", "purchaseLimitNumMax"];
  }

  get data(): QuantityModuleOptions {
    return super.data;
  }
}
