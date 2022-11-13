import { ProductModule } from "../../core/product-module";
import { StoreModuleOptions } from "../../types";
import { Product } from "../product";

export class StoreModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = [
      "countryCompleteName",
      "followingNumber",
      "openTime",
      "positiveNum",
      "positiveRate",
      "storeName",
      "storeURL",
      "topRatedSeller",
    ];
  }

  get data(): StoreModuleOptions {
    return super.data;
  }
}
