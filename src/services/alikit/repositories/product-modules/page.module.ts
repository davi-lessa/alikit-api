import { ProductModule } from "../../core/product-module";
import { PageModuleOptions } from "../../types";
import { Product } from "../product";

export interface PageSummaryOptions {
  description: string;
  imagePath: string;
  keywords: string;
  mSiteUrl: string;
  multiLanguageUrlList: MultiLanguageUrlList[];
  oldItemDetailUrl: string;
}

export interface MultiLanguageUrlList {
  language: string;
  languageUrl: string;
}

export class PageModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["description", "imagePath", "keywords", "mSiteUrl", "multiLanguageUrlList", "oldItemDetailUrl"];
  }

  get data(): PageModuleOptions | undefined {
    return super.data;
  }

  get summary(): PageSummaryOptions {
    return super.summary;
  }
}
