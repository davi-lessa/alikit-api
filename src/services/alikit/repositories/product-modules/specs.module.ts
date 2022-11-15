import { ProductModule } from "../../core/product-module";
import { SpecsModuleOptions } from "../../types";
import { Product } from "../product";

export interface SpecsSummaryOptions extends Omit<SpecsModuleOptions, "id" | "name" | "i18nMap" | "features"> {}

export class SpecsModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["props"];
  }

  get data(): SpecsModuleOptions | undefined {
    return super.data;
  }

  get summary(): SpecsSummaryOptions {
    return super.summary;
  }
}
