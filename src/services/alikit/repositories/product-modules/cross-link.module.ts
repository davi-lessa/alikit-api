import { ProductModule } from "../../core/product-module";
import { CrossLinkOptions } from "../../types";
import { Product } from "../product";

export class CrossLinkModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["breadCrumbPathList", "crossLinkGroupList"];
  }

  get data(): CrossLinkOptions {
    return super.data;
  }
}
