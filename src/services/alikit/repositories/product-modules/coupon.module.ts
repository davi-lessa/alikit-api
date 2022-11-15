import { ProductModule } from "../../core/product-module";
import { CouponModuleOptions } from "../../types";
import { Product } from "../product";

export interface CouponSummaryOptions {
  couponList: any[];
}

export class CouponModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["webCouponInfo.couponList"];
  }

  get data(): CouponModuleOptions | undefined {
    return super.data;
  }

  get summary(): CouponSummaryOptions {
    return super.summary;
  }
}
