import { ProductModule } from "../../core/product-module";
import { ShippingModuleOptions } from "../../types";
import { Product } from "../product";
import { BizData } from "../../types/shipping.module.options";

export interface ShippingSummaryOptions {
  freightInfo: FreightInfo[];
  regionCountryName: string;
}

interface FreightInfo {
  bizData: BizData;
}

export class ShippingModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["generalFreightInfo.originalLayoutResultList", "regionCountryName"];
    this._summaryRenamingMap = { originalLayoutResultList: "freightInfo" };
    this._summaryKeysForRemove = [
      "additionLayout",
      "contentLayout",
      "delivery",
      "deliveryOptionPanelDisplayList",
      "detailFirstScreenDisplayList",
      "dxTemplateInfo",
      "finalPatternId",
      "skuSwitchDisplayList",
      "titleLayout",
    ];
  }

  get data(): ShippingModuleOptions | undefined {
    return super.data;
  }

  get summary(): ShippingSummaryOptions {
    return super.summary;
  }
}
