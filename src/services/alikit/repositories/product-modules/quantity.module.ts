import { ProductModule } from "../../core/product-module";
import { QuantityModuleOptions } from "../../types";
import { Product } from "../product";

export interface QuantitySummaryOptions {
  isLot: boolean;
  totalAvailQuantity: number;
  purchaseLimitNumMax: number;
}

export class QuantityModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["lot", "totalAvailQuantity", "purchaseLimitNumMax"];
    this._summaryRenamingMap = {
      lot: "isLot",
      totalAvailQuantity: "stock",
      purchaseLimitNumMax: "purchaseLimit",
    };
  }

  get data(): QuantityModuleOptions | undefined {
    return super.data;
  }

  get summary(): QuantitySummaryOptions {
    return super.summary;
  }
}
