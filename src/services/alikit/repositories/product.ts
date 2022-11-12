import { DOMWindow } from "jsdom";
import { AliKit } from "../core/alikit";
import { Repository } from "../core/repository";
import { generateProductURLFromId } from "../utils/generate-product-url";
import * as Modules from "./product-modules/index";

interface allModules {
  actionModule: Modules.ActionModule;
  // "commonModule",
  // "couponModule",
  // "crossLinkModule",
  // "descriptionModule",
  // "feedbackModule",
  // "groupShareModule",
  // "imageModule",
  // "installmentModule",
  // "middleBannerModule",
  // "otherServiceModule",
  // "pageModule",
  // "preSaleModule",
  // "priceModule",
  // "quantityModule",
  // "recommendModule",
  // "redirectModule",
  // "shippingModule",
  // "skuModule",
  // "specsModule",
  // "storeModule",
  // "titleModule",
}

type ValueOf<T> = T[keyof T];
type ValueOfModules = ValueOf<allModules>; // string | number

export class Product extends Repository {
  private _id!: string;
  private _url!: string;
  private _dom!: DOMWindow;

  modules: {
    action: Modules.ActionModule;
    buyer_protection: Modules.BuyerProtection;
    common: Modules.CommonModule;
    coupon: Modules.CouponModule;
    crossLink: Modules.CrossLinkModule;
    description: Modules.DescriptionModule;
    feedback: Modules.FeedbackModule;
    image: Modules.ImageModule;
    installment: Modules.InstallmentModule;
    page: Modules.PageModule;
    price: Modules.PriceModule;
    quantity: Modules.QuantityModule;
    shipping: Modules.ShippingModule;
    sku: Modules.SkuModule;
    specs: Modules.SpecsModule;
    store: Modules.StoreModule;
    title: Modules.TitleModule;
  };

  constructor(main: AliKit) {
    super(main);
    this.modules = {
      action: new Modules.ActionModule(this, "actionModule"),
      buyer_protection: new Modules.BuyerProtection(this, "buyerProtectionModule"),
      common: new Modules.CommonModule(this, "commonModule"),
      coupon: new Modules.CouponModule(this, "couponModule"),
      crossLink: new Modules.CrossLinkModule(this, "crossLinkModule"),
      description: new Modules.DescriptionModule(this, "descriptionModule"),
      feedback: new Modules.FeedbackModule(this, "feedbackModule"),
      image: new Modules.ImageModule(this, "imageModule"),
      installment: new Modules.InstallmentModule(this, "installmentModule"),
      page: new Modules.PageModule(this, "pageModule"),
      price: new Modules.PriceModule(this, "priceModule"),
      quantity: new Modules.QuantityModule(this, "quantityModule"),
      shipping: new Modules.ShippingModule(this, "shippingModule"),
      sku: new Modules.SkuModule(this, "skuModule"),
      specs: new Modules.SpecsModule(this, "specsModule"),
      store: new Modules.StoreModule(this, "storeModule"),
      title: new Modules.TitleModule(this, "titleModule"),
    };
  }

  public get dom(): DOMWindow {
    return this._dom;
  }

  private set dom(domWindow) {
    this._dom = domWindow;
  }

  public setById(id: string) {
    this._id = id;
    this._url = "";
    return this;
  }

  public setByURL(url: string) {
    this._id = "";
    this._url = url;
    return this;
  }

  public get currentURL() {
    const url = this._url || generateProductURLFromId(this._id);
    const bestURL = url ? new URL(url) : null;
    return bestURL ? bestURL.href : null;
  }

  async getData() {
    const url = this.currentURL;
    if (!url) throw "First set the product id or give the product url";

    const domWindow = await this.main.request.domRequest(url);
    this.dom = domWindow;
    return domWindow;
  }
}
