import { ProductModule } from "../../core/product-module";
import { ActionModuleOptions } from "../../types";
import { Product } from "../product";

export class ActionModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["itemWishedCount", "localSeller", "companyId", "rootCategoryId", "storeNum"];
  }

  get data(): ActionModuleOptions {
    return this.data;
  }
}
