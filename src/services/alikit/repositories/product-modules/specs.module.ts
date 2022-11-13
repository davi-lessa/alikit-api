import { ProductModule } from "../../core/product-module";
import { SpecsModuleOptions } from "../../types";
import { Product } from "../product";

export class SpecsModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["props"];
  }

  get data(): SpecsModuleOptions {
    return super.data;
  }
}
