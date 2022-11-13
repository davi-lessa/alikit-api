import { ProductModule } from "../../core/product-module";
import { ShippingModuleOptions } from "../../types";
import { Product } from "../product";

export class ShippingModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["generalFreightInfo.originalLayoutResultList[0]", "regionCountryName"];
    this._relevantRenamingMap = { originalLayoutResultList: "freightInfo" };
    this._relevantKeysForRemove = ["additionLayout"];
  }

  get data(): ShippingModuleOptions {
    return super.data;
  }
}
