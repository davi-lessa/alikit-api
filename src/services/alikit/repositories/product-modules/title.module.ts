import { ProductModule } from "../../core/product-module";
import { TitleModuleOptions } from "../../types";
import { Product } from "../product";

export class TitleModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["feedbackRating", "tradeCount", "subject"];
  }

  get data(): TitleModuleOptions {
    return super.data;
  }
}
