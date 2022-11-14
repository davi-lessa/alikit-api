import { ProductModule } from "../../core/product-module";
import { PriceModuleOptions } from "../../types";
import { AmountPattern } from "../../types/amount.pattern.types";
import { Product } from "../product";

export interface PriceSummaryOptions {
  discount: number;
  discountPromotion: boolean;
  formatedPrice: string;
  formatedActivityPrice: string;
  maxActivityAmount: AmountPattern;
  maxAmount: AmountPattern;
  minActivityAmount: AmountPattern;
  minAmount: AmountPattern;
  numberPerLot: number;
  promotionSellingPointTags: PromotionSellingPointTag[];
}

export interface PromotionSellingPointTag {
  elementList: ElementList[];
}

export interface ElementList {
  textContent?: string;
}

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
    this._summaryKeysForRemove = ["iconAddress", "iconHeight", "iconType", "iconWidth", "elementType", "textColor"];
  }

  get data(): PriceModuleOptions {
    return super.data;
  }

  get summary(): PriceSummaryOptions {
    return super.summary;
  }
}
