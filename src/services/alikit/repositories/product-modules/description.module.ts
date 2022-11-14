import { ProductModule } from "../../core/product-module";
import { DescriptionModuleOptions } from "../../types";
import { Product } from "../product";

export interface DescriptionSummaryOptions {
  descriptionUrl: string;
}

export class DescriptionModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["descriptionUrl"];
  }

  get data(): DescriptionModuleOptions {
    return super.data;
  }

  get summary(): DescriptionSummaryOptions {
    return super.summary;
  }
}
