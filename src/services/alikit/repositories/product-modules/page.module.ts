import { ProductModule } from "../../core/product-module";
import { PageModuleOptions } from "../../types";
import { Product } from "../product";

export class PageModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["description", "imagePath", "keywords", "mSiteUrl", "multiLanguageUrlList", "oldItemDetailUrl"];
  }

  get data(): PageModuleOptions {
    return super.data;
  }
}
