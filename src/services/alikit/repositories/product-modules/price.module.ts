import { ProductModule } from "../../core/product-module";
import { PriceModuleOptions } from "../../types";
import { Product } from "../product";

export class PriceModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = [
      "discount",
      "discountPromotion",
      "formatedPrice",
      "formatedActivityPrice",
      "maxActivityAmount",
      "maxAmount",
      "minActivityAmount",
      "minAmount",
      "numberPerLot",
      "promotionSellingPointTags",
    ];
  }

  get data(): PriceModuleOptions {
    return super.data;
  }
}
