import { ProductModule } from "../../core/product-module";
import { ShippingModuleOptions } from "../../types";
import { Product } from "../product";

export class ShippingModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["generalFreightInfo.originalLayoutResultList[0]", "regionCountryName"];
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

  get data(): ShippingModuleOptions {
    return super.data;
  }
}
