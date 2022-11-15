import { ProductModule } from "../../core/product-module";
import { TitleModuleOptions } from "../../types";
import { Product } from "../product";

export interface TitleSummaryOptions
  extends Omit<
    TitleModuleOptions,
    | "id"
    | "name"
    | "features"
    | "formatTradeCount"
    | "orig"
    | "origTitle"
    | "subject"
    | "titleTags"
    | "tradeCountUnit"
    | "trans"
    | "transTitle"
    | "i18nMap"
  > {
  title: string;
}

export class TitleModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = ["feedbackRating", "tradeCount", "subject"];
    this._summaryRenamingMap = {
      subject: "title",
    };
  }

  get data(): TitleModuleOptions | undefined {
    return super.data;
  }

  get summary(): TitleSummaryOptions {
    return super.summary;
  }
}
