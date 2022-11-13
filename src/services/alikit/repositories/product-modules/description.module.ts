import { ProductModule } from "../../core/product-module";
import { DescriptionModuleOptions } from "../../types";
import { Product } from "../product";

export class DescriptionModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["descriptionUrl"];
  }

  get data(): DescriptionModuleOptions {
    return super.data;
  }
}
