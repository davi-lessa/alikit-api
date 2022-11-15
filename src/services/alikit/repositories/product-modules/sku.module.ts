import { ProductModule } from "../../core/product-module";
import { ProductSkupropertyList, SkuModuleOptions, SkuPriceList } from "../../types";
import { Product } from "../product";

export interface SkuSummaryOptions {
  productSKUPropertyList: ProductSkupropertyList[];
  skuPriceList: SkuPriceList[];
}

export class SkuModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["productSKUPropertyList", "skuPriceList"];
  }

  get data(): SkuModuleOptions | undefined {
    return super.data;
  }

  get summary(): SkuSummaryOptions {
    return super.summary;
  }
}
