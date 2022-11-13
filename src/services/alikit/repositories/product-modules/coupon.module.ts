import { ProductModule } from "../../core/product-module";
import { CouponModuleOptions } from "../../types";
import { Product } from "../product";

export class CouponModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._relevantKeys = ["webCouponInfo.couponList"];
  }

  get data(): CouponModuleOptions {
    return super.data;
  }
}
