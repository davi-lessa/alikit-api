import { ProductModule } from "../../core/product-module";
import { CrossLinkOptions } from "../../types";
import { Product } from "../product";

export interface CrossLinkSummaryOptions {
  couponList: any[];
}

export class CrossLinkModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["breadCrumbPathList", "crossLinkGroupList"];
    this._summaryRenamingMap = { cateId: "catId" };
    this._summaryKeysForRemove = ["remark", "target"];
  }

  get data(): CrossLinkOptions {
    return super.data;
  }

  get summary(): CrossLinkSummaryOptions {
    return super.summary;
  }
}
