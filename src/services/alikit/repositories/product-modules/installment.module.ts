import { ProductModule } from "../../core/product-module";
import { InstallmentModuleOptions } from "../../types";
import { Product } from "../product";

export class InstallmentModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["installmentFormList", "rangePrice"];
  }

  get data(): InstallmentModuleOptions {
    return super.data;
  }
}
