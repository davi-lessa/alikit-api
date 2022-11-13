import { ProductModule } from "../../core/product-module";
import { FeedbackModuleOptions } from "../../types";
import { Product } from "../product";

export class FeedbackModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["feedbackServer"];
  }

  get data(): FeedbackModuleOptions {
    return super.data;
  }
}
