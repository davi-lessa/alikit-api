import { ProductModule } from "../../core/product-module";
import { PageModuleOptions } from "../../types";
import { Product } from "../product";

export interface PageSummaryOptions {
  short_description: string;
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
    this._summaryRenamingMap = {
      description: "short_description",
    };
  }

  get data(): PageModuleOptions {
    return super.data;
  }

  get summary(): PageSummaryOptions {
    return super.summary;
  }
}
