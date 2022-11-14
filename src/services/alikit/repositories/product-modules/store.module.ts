import { ProductModule } from "../../core/product-module";
import { StoreModuleOptions } from "../../types";
import { Product } from "../product";

interface StoreSummaryOptions
  extends Omit<
    StoreModuleOptions,
    | "id"
    | "name"
    | "features"
    | "companyId"
    | "detailPageUrl"
    | "esRetailOrConsignment"
    | "feedbackMessageServer"
    | "feedbackServer"
    | "followed"
    | "hasStore"
    | "hasStoreHeader"
    | "hideCustomerService"
    | "i18nMap"
    | "openedYear"
    | "productId"
    | "sellerAdminSeq"
    | "sessionId"
    | "siteType"
    | "storeNum"
    | "topBrandDescURL"
  > {}

export class StoreModule extends ProductModule {
  constructor(product: Product, moduleKey: string) {
    super(product, moduleKey);
    this._summaryKeys = [
      "countryCompleteName",
      "followingNumber",
      "openTime",
      "positiveNum",
      "positiveRate",
      "storeName",
      "storeURL",
      "topRatedSeller",
    ];
  }

  get data(): StoreModuleOptions {
    return super.data;
  }

  get summary(): StoreSummaryOptions {
    return super.summary;
  }
}
