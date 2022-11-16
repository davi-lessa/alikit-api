import { DOMWindow } from "jsdom";
import { AliKit } from "../core/alikit";
import { ProductModule } from "../core/product-module";
import { Repository } from "../core/repository";
import { generateProductURLFromId, generateProductVideoLink } from "../utils/generates";
import * as Modules from "./product-modules/index";
import { ProductReviews } from "./product.reviews";

interface modulesTypes {
  action: Modules.ActionModule;
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
}

type SummaryUnionOptions = Modules.ActionSummaryOptions &
  Modules.CommonSummaryOptions &
  Modules.CouponSummaryOptions &
  Modules.CrossLinkSummaryOptions &
  Modules.DescriptionSummaryOptions &
  Modules.FeedbackSummaryOptions &
  Modules.ImageSummaryOptions &
  Modules.InstallmentSummaryOptions &
  Modules.PageSummaryOptions &
  Modules.PriceSummaryOptions &
  Modules.QuantitySummaryOptions &
  Modules.ShippingSummaryOptions &
  Modules.SkuSummaryOptions &
  Modules.SpecsSummaryOptions &
  Modules.StoreSummaryOptions &
  Modules.TitleSummaryOptions;

interface FullDescriptionOptions {
  text: string;
  imageLinks: string[];
}

export class Product extends Repository {
  private _id!: string;
  private _url!: string;
  private _dom!: DOMWindow | null;
  private _fetching: boolean;

  public modules: modulesTypes;
  public reviews: ProductReviews;

  constructor(main: AliKit, productIdOrUrl?: string) {
    super(main);
    this._fetching = false;

    if (productIdOrUrl) {
      let trimmedProductIdOrUrl = productIdOrUrl.trim();

      try {
        let url = new URL(trimmedProductIdOrUrl);
        this.setByURL(url.href);
      } catch (er) {
        const IdRegEx = /[0-9]+/g;
        const probableId = IdRegEx.exec(trimmedProductIdOrUrl)?.[0];
        if (probableId) this.setById(probableId);
      }
    }

    this.modules = {
      action: new Modules.ActionModule(this, "actionModule"),
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

    this.reviews = new ProductReviews(this, this.main);
  }

  _reset() {
    // Use it before a new data extraction;
    this.dom = null;
    this._id = "";
    this._url = "";
  }

  public get dom(): DOMWindow | null {
    if (!this._dom) throw new Error("First, load a product data");
    return this._dom;
  }

  private set dom(domWindow) {
    this._dom = domWindow;
  }

  public setById(id: string) {
    this._reset();
    this._id = id;
    return this;
  }

  public setByURL(url: string) {
    this._reset();
    this._url = url;
    return this;
  }

  public get currentURL() {
    const url = this._url || generateProductURLFromId(this._id);
    const bestURL = url ? new URL(url) : null;
    return bestURL ? bestURL.href : null;
  }

  public get summary(): SummaryUnionOptions {
    // Unify all modules summaries into one object
    let allData: any = {};

    Object.entries(this.modules).forEach(([k, v]) => {
      const moduleObject: ProductModule = v;
      allData = { ...allData, ...moduleObject.summary };
    });

    return allData;
  }

  public getVideoLink() {
    // Generates a video link based on product data
    let { videoUid, videoId } = this.modules.image.data;
    return generateProductVideoLink(videoUid, videoId);
  }

  async getData(resetBefore: boolean = false) {
    if ((this._dom || this._fetching) && !resetBefore)
      return console.warn("Data was already been obtained / is already being obtained for this product.");
    else if (resetBefore) this._reset();

    this._fetching = true;

    try {
      const url = this.currentURL;
      if (!url) throw new Error("First, set the product id or provide the product url");

      const domWindow = await this.main.request.domRequest(url);

      // Using pageModule to validate the product (Invalid products do not contain this module in runParams)
      if (!domWindow?.runParams?.data?.pageModule) {
        this._reset();
        throw new Error("Unable to get product data");
      }

      this.dom = domWindow;
      this.reviews.setup();

      this._fetching = false;
      return this.summary;
    } catch (error) {
      this._fetching = false;
      console.error(error);
    }
  }

  public async getFullDescription(): Promise<FullDescriptionOptions> {
    const fullDescriptionUrl = this.modules.description.data.descriptionUrl;
    if (!fullDescriptionUrl) throw new Error("Unable to get product full description link.");
    console.log(fullDescriptionUrl);

    try {
      const domWindow = await this.main.request.domRequest(fullDescriptionUrl);

      const text = [...domWindow.document.querySelectorAll("p")]
        .map((p) => p.textContent?.replace(/\n/g, "")?.trim())
        .filter((i) => i)
        .join("\n");

      const imageLinks = [...domWindow.document.querySelectorAll("img")].map((img) => img.src);

      return { imageLinks, text };
    } catch (error) {
      throw error;
    }
  }
}
