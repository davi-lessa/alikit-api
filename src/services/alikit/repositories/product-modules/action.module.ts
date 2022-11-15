import { ProductModule } from "../../core/product-module";
import { ActionModuleOptions } from "../../types";
import { Product } from "../product";

export interface ActionSummaryOptions {
  itemWishedCount: number;
  isLocalSeller: boolean;
  companyId: number;
  rootCategoryId: number;
  storeNum: number;
}

export class ActionModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["itemWishedCount", "localSeller", "companyId", "rootCategoryId", "storeNum"];
    this._summaryRenamingMap = { localSeller: "isLocalSeller" };
  }

  get data(): ActionModuleOptions {
    return super.data;
  }

  get summary(): ActionSummaryOptions {
    return super.summary;
  }
}
