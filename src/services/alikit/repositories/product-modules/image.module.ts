import { ProductModule } from "../../core/product-module";
import { ImageModuleOptions } from "../../types";
import { Product } from "../product";

export class ImageModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["imagePathList", "summImagePathList", "videoId", "videoUid"];
  }

  get data(): ImageModuleOptions {
    return super.data;
  }
}
