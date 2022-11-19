import { AliRequest } from "./request";
import { Product } from "../repositories/product";
import { ReviewsQueryOptionsPassedOptions } from "../repositories/product.reviews";

interface AliKitSettings {
  reviewsSettings?: ReviewsQueryOptionsPassedOptions;
}

export class AliKit {
  public request = new AliRequest(this);
  public product: Product;
  private _settings: AliKitSettings;

  constructor(productUrlOrId?: string, settings: AliKitSettings = {}) {
    this.product = new Product(this, productUrlOrId);
    this._settings = settings;
  }

  public get settings() {
    return this._settings;
  }

  reset() {
    // Use it before a new data extraction;
    this.product._reset();
  }
}
