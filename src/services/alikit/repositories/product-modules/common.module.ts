import { ProductModule } from "../../core/product-module";
import { CommonModuleOptions } from "../../types";
import { Product } from "../product";

export interface CommonSummaryOptions {
  categoryId: number;
  currencyCode: string;
  productId: number;
  preSale: boolean;
  sellerAdminSeq: number;
}

export class CommonModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["categoryId", "currencyCode", "productId", "preSale", "sellerAdminSeq"];
  }

  get data(): CommonModuleOptions | undefined {
    return super.data;
  }

  get summary(): CommonSummaryOptions {
    return super.summary;
  }
}
