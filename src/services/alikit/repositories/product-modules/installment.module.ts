import { ProductModule } from "../../core/product-module";
import { InstallmentModuleOptions } from "../../types";
import { Product } from "../product";
import { AmountPattern } from "../../types/amount.pattern.types";

export interface InstallmentSummaryOptions {
  intallments: InstallmentFormList[];
  rangePrice: boolean;
}

export interface InstallmentFormList {
  installmentTerm: number;
  termAmount: AmountPattern;
  termTotalAmount: AmountPattern;
  hasInterestFee?: boolean;
  termTotalInterestFee?: AmountPattern;
}

export class InstallmentModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["installmentFormList", "rangePrice"];
    this._summaryRenamingMap = { installmentFormList: "installments" };
  }

  get data(): InstallmentModuleOptions {
    return super.data;
  }

  get summary(): InstallmentSummaryOptions {
    return super.summary;
  }
}
