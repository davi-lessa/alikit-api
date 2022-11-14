import { ProductModule } from "../../core/product-module";
import { ImageModuleOptions } from "../../types";
import { Product } from "../product";

export interface ImageSummaryOptions {
  imagePathList: string[];
  summImagePathList: string[];
  videoId: number;
  videoUid: string;
}

export class ImageModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["imagePathList", "summImagePathList", "videoId", "videoUid"];
  }

  get data(): ImageModuleOptions {
    return super.data;
  }

  get summary(): ImageSummaryOptions {
    return super.summary;
  }
}
